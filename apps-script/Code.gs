/**
 * Dunchideock Village Suppliers — the recommendations endpoint.
 *
 * This is the ONLY thing on the internet that can write to the spreadsheet,
 * and it is deliberately the smallest thing that can do the job.
 *
 * WHAT IT DOES
 *   Accepts a recommendation from the website — {id, name, text} — and APPENDS
 *   the villager's words and their name to the Published row that trader id
 *   already has. Nothing else.
 *
 *   It writes to columns K `recommendations` and L `recommended_by` of that one
 *   row, through `appendRecommendation()` in Publish.gs — the SAME function the
 *   automatic publisher calls when a duplicate form submission turns out to be
 *   a second recommendation. One function, not a second copy, so the two routes
 *   cannot drift apart in how they store a villager's words.
 *
 * WHY IT NO LONGER WRITES TO THE VOTES TAB
 *   Owner's ruling D1b-6G7f-19092026, 2026-09-19. It used to append a row to a
 *   tab named Votes. NOTHING READS THAT TAB — the site fetches exactly one
 *   feed, the published CSV of the Published tab — so a villager tapping
 *   "I recommend them too" was thanked by the page and their words went
 *   somewhere no villager would ever see. Published is the path the automatic
 *   publisher already proves, so the panel now feeds it.
 *
 *   The Votes tab itself is left alone: not read, not written, not deleted.
 *   Whatever is in it stays in it. This script simply stops adding to it.
 *
 * WHAT IT CANNOT DO — these are the safety properties, and every one of them
 * is enforced by the code below rather than promised in this comment.
 * Owner's ruling D2-6G7f-19092026 bounds its power to EXACTLY this:
 *   - It cannot CREATE a row. There is no append and no insert anywhere here,
 *     so it can never add a person to the directory.
 *   - It cannot ASSIGN or REUSE an id. It never calls nextId() and never
 *     writes column A.
 *   - It cannot write ANY column but K and L. Those two indices are constants
 *     taken from Publish.gs and no request parameter can change them.
 *   - It cannot touch I and J — the owner's ARRAYFORMULA helper columns.
 *     Writing a value into a cell a formula produces destroys that formula,
 *     which has already happened once on this project (handover Layer 3).
 *   - It cannot change a name, a telephone number, a trade or a status. Those
 *     live in A-H and nothing here addresses them.
 *   - It cannot reach an UNKNOWN or a HIDDEN id. Both are refused outright,
 *     logged, and NOTHING is written.
 *   - It cannot write to the responses tab or to Votes. It opens exactly one
 *     tab, named by a hard-coded constant, checked against a forbidden list.
 *
 *   The endpoint's exposure is therefore the same as the open Google Form's —
 *   a stranger can add words to somebody already listed, exactly as they could
 *   by filling the form in — and no wider. It cannot list anybody new, cannot
 *   change a telephone number, and cannot take anybody off the site.
 *
 * WHY IT IS OPEN TO ANYONE
 *   Villagers do not log in — requiring that would defeat the whole product.
 *   So this endpoint is reachable by anybody who finds the URL. The worst that
 *   can happen is unwanted words on a card, which the owner can delete from the
 *   Published tab in one edit. The names and telephone numbers themselves
 *   cannot be touched from here. That trade-off is set out in full in
 *   docs/SOLUTION-DESIGN-dunchi-trader.md section 8.2 and was accepted
 *   deliberately.
 *
 * IF IT IS EVER ABUSED
 *   Delete the deployment in the Apps Script editor, or redeploy it at a new
 *   URL, and clear the unwanted text out of column K. The website carries on
 *   working throughout; only the "I recommend them too" button stops.
 *
 * IT DEPENDS ON Publish.gs BEING IN THE SAME PROJECT
 *   Both files live in the one Apps Script project bound to the spreadsheet.
 *   This file calls `appendRecommendation`, `tableValues`, `PUB_COLS` and
 *   `PUB_TAB` from Publish.gs. If Publish.gs is missing, `doPost` refuses and
 *   says so rather than half-working — see `requirePublisher()`.
 *
 * DEPLOYMENT
 *   See apps-script/DEPLOY.md. It must be deployed from the dunchitrader
 *   Google account, which owns the Sheet — never from anywhere else, and
 *   always as a NEW VERSION of the EXISTING deployment so the /exec URL the
 *   site posts to does not change.
 *
 *   2026-09-19 — MEASURED, and it is why this file was rewritten to be
 *   redeployed: the deployment at the URL the live site posts to answers
 *   "Script function not found: doPost" to every POST and "Script function not
 *   found: doGet" to every GET. The deployed copy is not this file. Redeploying
 *   it is step 1 of the owner's list. See handover Layer 3.
 */

/** The only tab this script may write to. Hard-coded on purpose. */
var PUB_TAB_ENDPOINT = 'Published';

/** Tabs this script must never touch, checked explicitly so the intent is
 *  visible to anybody reading or changing this file later. The Votes tab is on
 *  this list from 2026-09-19: the endpoint stopped writing to it under D1b and
 *  must never start again by accident. */
var FORBIDDEN_TABS = ['Votes', 'Form responses 1', 'Form Responses 1', 'Form responses'];

/** Length limits. A villager writing a paragraph is fine; a robot pasting a
 *  megabyte is not. Values are trimmed rather than rejected, so a genuine
 *  long recommendation is still recorded. */
var MAX_ID   = 32;
var MAX_NAME = 120;
var MAX_TEXT = 2000;

/** Minimum length of the words, matching the website and the Google Form.
 *
 *  SEVEN, not fifteen. The owner ruled on 2026-09-18 that "Fixed gate" is
 *  about as short as a real answer gets. The page (app.js MIN_WORDS) and the
 *  sheet's CHECK THIS trigger both use seven; this file must agree with them,
 *  because a villager whose seven characters the page accepted would otherwise
 *  be thanked and then silently dropped here — the cross-origin reply is
 *  opaque, so the page could never have told them. Build plan row 4.6.
 *
 *  CHANGING THIS FILE IS ONLY HALF THE FIX. The copy that actually runs lives
 *  in the owner's Apps Script project, so he must re-paste it and redeploy as
 *  a NEW VERSION of the EXISTING deployment — see apps-script/DEPLOY.md. A new
 *  deployment would issue a different /exec URL and silently stop the site's
 *  recommend button working. */
var MIN_TEXT = 7;

/** The status value that means "on the website". Anything else — `hidden`,
 *  blank, a word the owner typed — is not reachable by a villager, so a
 *  recommendation must not be attached to it. */
var VISIBLE_STATUS = 'active';

/**
 * The website posts here.
 *
 * It sends Content-Type text/plain with a JSON body, because a browser posting
 * to Apps Script from another origin cannot send application/json without a
 * CORS preflight that Apps Script does not answer. The body is parsed by hand
 * for that reason.
 *
 * MEASURED 2026-09-19 against the served page: the body is
 * `JSON.stringify({id, name, text})`, the method is POST, the mode is no-cors
 * and the Content-Type is `text/plain;charset=utf-8`. That is exactly the shape
 * `readPayload` below parses.
 */
function doPost(e) {
  try {
    var payload = readPayload(e);

    var id   = clean(payload.id,   MAX_ID);
    var name = clean(payload.name, MAX_NAME);
    var text = clean(payload.text, MAX_TEXT);

    if (!id) return fail('missing trader id');

    /* SEVEN characters, the same as the page and the sheet. A villager whose
       six characters the page already refused should never reach here; if one
       does, the refusal reads the same on both sides rather than differently. */
    if (text.length < MIN_TEXT) return fail('recommendation too short');

    // A blank name is expected and allowed — it becomes "a villager", exactly
    // as the website shows it and exactly as the publisher stores it.
    if (!name) name = ANON_ENDPOINT();

    return appendToPublished(id, name, text);

  } catch (err) {
    // Never leak internals to the caller. The owner can see real errors in the
    // Apps Script execution log.
    Logger.log('recommendation failed: ' + (err && err.message));
    return fail('could not record recommendation');
  }
}

/**
 * A GET returns a plain note rather than an error, so that opening the URL in
 * a browser during setup shows something intelligible instead of a stack trace.
 * It deliberately reveals nothing about the spreadsheet.
 *
 * It is also the cheapest possible deployment check: if this address answers
 * with a Google error page saying "Script function not found: doGet", the
 * deployment is not running this file, and the recommend button is dead.
 */
function doGet(e) {
  return ContentService
    .createTextOutput('This address only accepts recommendations sent by the Dunchideock village suppliers website.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/** Pull {id, name, text} out of the request, whichever way it arrived. */
function readPayload(e) {
  if (!e) return {};

  // The website's form of request: a text/plain body containing JSON.
  if (e.postData && e.postData.contents) {
    try {
      var parsed = JSON.parse(e.postData.contents);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (ignored) {
      // fall through to form parameters
    }
  }

  // Ordinary form parameters, so a hand test from a browser form also works.
  if (e.parameter) return e.parameter;

  return {};
}

/** Trim, force to a string, and cap the length. */
function clean(value, max) {
  if (value === null || value === undefined) return '';
  var s = String(value).trim();
  if (s.length > max) s = s.substring(0, max);
  return s;
}

/**
 * Add the villager's words to the Published row carrying this trader id.
 *
 * EVERY SAFETY PROPERTY OF THIS SCRIPT LIVES IN THIS FUNCTION, so it is worth
 * reading slowly.
 *
 *   - The tab is named by a constant, never by anything the caller sent, and is
 *     checked against the forbidden list before anything is opened.
 *   - The row is found by MATCHING the id against column A of the table. An id
 *     that is not there is refused; nothing is created for it.
 *   - A row whose `status` is not `active` is refused. A hidden person is off
 *     the website deliberately — because their number is wrong, or the owner
 *     took them down — and attaching a villager's words to them would be
 *     writing into a row the owner has already set aside.
 *   - The write itself is `appendRecommendation()` from Publish.gs, which
 *     touches ONLY cells K and L of that row. Not A-H, not I and J.
 *
 * REFUSALS ARE LOGGED AND SILENT TO THE CALLER, which is deliberate in both
 * directions. The log is how the owner sees that somebody posted a bad id. The
 * silence is because the reply is opaque to the page anyway (solution design
 * §6.2) — the caller learns nothing from it, so there is nothing to leak.
 */
function appendToPublished(id, name, text) {
  if (FORBIDDEN_TABS.indexOf(PUB_TAB_ENDPOINT) !== -1) {
    throw new Error('refusing to write to a protected tab');
  }

  requirePublisher();

  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var pub = ss.getSheetByName(PUB_TAB_ENDPOINT);
  if (!pub) {
    throw new Error('the "' + PUB_TAB_ENDPOINT + '" tab does not exist');
  }

  /* tableValues() from Publish.gs reads the header plus every row down to the
     LAST REAL ID in column A.

     This is the lesson the project has already paid for, and it is why this
     line is not getLastRow() or getDataRange(). The owner's ARRAYFORMULA
     helpers at I and J cover the whole column, returning an empty string for
     every row to the bottom of the sheet. An empty string produced by a formula
     is still content to Google, so getLastRow() counts it, getDataRange() spans
     it, and appendRow() writes about a thousand lines below the table. A helper
     formula covering a whole column makes the sheet look full to a script.
     See handover Layer 3, 2026-09-18. */
  var values = tableValues(pub);

  var at = rowIndexForId(values, id);
  if (at === -1) {
    Logger.log('recommendation refused: no such trader id "' + id + '"');
    return fail('that tradesperson is not on the list');
  }

  if (!isVisible(values, at)) {
    Logger.log('recommendation refused: trader id "' + id + '" is not active');
    return fail('that tradesperson is not on the list');
  }

  var added = appendRecommendation(pub, values, at, text, name);

  // `false` means these exact words were already recorded against this person,
  // which is a duplicate tap rather than a failure. The villager is thanked
  // either way and nothing is written twice.
  return ok(added);
}

/**
 * Which row of the table carries this trader id? -1 if none.
 *
 * Zero-based into the values array, so row 1 is the first data row — the same
 * indexing `appendRecommendation` and `rowIndexForPhone` in Publish.gs use.
 *
 * Matching is case-insensitive and trimmed, because an id travels through the
 * page's HTML and a villager's browser before it gets here, and `t001` meaning
 * anything other than `T001` would be a surprise to everybody.
 */
function rowIndexForId(values, id) {
  var col = PUB_COLS.indexOf('id');
  var want = String(id).trim().toUpperCase();
  for (var r = 1; r < values.length; r++) {
    if (String(values[r][col] || '').trim().toUpperCase() === want) return r;
  }
  return -1;
}

/** Is this row on the website? Only `active` is, matching what app.js renders. */
function isVisible(values, rowIdx) {
  var col = PUB_COLS.indexOf('status');
  var s = String((values[rowIdx] || [])[col] || '').trim().toLowerCase();
  return s === VISIBLE_STATUS;
}

/**
 * Refuse to run at all if Publish.gs is not in this project.
 *
 * Stated as a check rather than left to a ReferenceError deep inside a write,
 * because the failure this guards against has already happened on this project
 * in the other direction: on 2026-09-19 the deployment was found answering
 * "Script function not found: doPost", which is what a project missing a file
 * looks like from outside. Failing loudly in the log beats writing half a row.
 */
function requirePublisher() {
  if (typeof appendRecommendation !== 'function' ||
      typeof tableValues          !== 'function' ||
      typeof PUB_COLS             === 'undefined') {
    throw new Error(
      'apps-script/Publish.gs is missing from this Apps Script project. ' +
      'This endpoint shares its append function and cannot run without it.');
  }
}

/** The name a blank becomes. Taken from Publish.gs when it is there so the two
 *  routes cannot disagree, with the same literal as a fallback. */
function ANON_ENDPOINT() {
  return (typeof ANON === 'string' && ANON) ? ANON : 'a villager';
}

function ok(added) {
  return ContentService
    .createTextOutput(JSON.stringify({ok: true, added: !!added}))
    .setMimeType(ContentService.MimeType.JSON);
}

function fail(why) {
  return ContentService
    .createTextOutput(JSON.stringify({ok: false, error: why}))
    .setMimeType(ContentService.MimeType.JSON);
}
