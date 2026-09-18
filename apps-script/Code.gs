/**
 * Dunchideock Village Suppliers — the votes endpoint.
 *
 * This is the ONLY thing on the internet that can write to the spreadsheet,
 * and it is deliberately the smallest thing that can do the job.
 *
 * WHAT IT DOES
 *   Accepts a recommendation from the website and appends ONE row to the tab
 *   named "Votes". Nothing else.
 *
 * WHAT IT CANNOT DO — these are the safety properties, and they are enforced
 * by the code below rather than promised in a comment:
 *   - It cannot write to "Published". The tab name is a hard-coded constant
 *     and there is no parameter that can change it.
 *   - It cannot read any tab. There is no getValues() call anywhere in here.
 *   - It cannot edit or delete an existing row. appendRow() only adds.
 *   - It cannot create a tab. If "Votes" is missing it fails and says so.
 *
 * WHY IT IS OPEN TO ANYONE
 *   Villagers do not log in — requiring that would defeat the whole product.
 *   So this endpoint is reachable by anybody who finds the URL. The worst that
 *   can happen is junk rows in the Votes tab, which only the owner looks at.
 *   The directory itself — the names and phone numbers on the Published tab —
 *   cannot be touched from here. That trade-off is set out in full in
 *   docs/SOLUTION-DESIGN-dunchi-trader.md section 8.2 and was accepted
 *   deliberately.
 *
 * IF IT IS EVER ABUSED
 *   Delete the deployment in the Apps Script editor, or redeploy it at a new
 *   URL, and delete the junk rows from the Votes tab. The website carries on
 *   working throughout; only the "I recommend them too" button stops.
 *
 * DEPLOYMENT
 *   See apps-script/DEPLOY.md. It must be deployed from the dunchitrader
 *   Google account, which owns the Sheet — never from anywhere else.
 */

/** The only tab this script may write to. Hard-coded on purpose. */
var VOTES_TAB = 'Votes';

/** Tabs this script must never touch, checked explicitly so the intent is
 *  visible to anybody reading or changing this file later. */
var FORBIDDEN_TABS = ['Published', 'Form responses 1', 'Form Responses 1'];

/** Length limits. A villager writing a paragraph is fine; a robot pasting a
 *  megabyte is not. Values are trimmed rather than rejected, so a genuine
 *  long recommendation is still recorded. */
var MAX_ID   = 32;
var MAX_NAME = 120;
var MAX_TEXT = 2000;

/** Minimum length of the words, matching the website and the Google Form. */
var MIN_TEXT = 15;

/**
 * The website posts here.
 *
 * It sends Content-Type text/plain with a JSON body, because a browser posting
 * to Apps Script from another origin cannot send application/json without a
 * CORS preflight that Apps Script does not answer. The body is parsed by hand
 * for that reason.
 */
function doPost(e) {
  try {
    var payload = readPayload(e);

    var id   = clean(payload.id,   MAX_ID);
    var name = clean(payload.name, MAX_NAME);
    var text = clean(payload.text, MAX_TEXT);

    if (!id)   return fail('missing trader id');
    if (text.length < MIN_TEXT) return fail('recommendation too short');

    // A blank name is expected and allowed — it becomes "a villager", exactly
    // as the website shows it.
    if (!name) name = 'a villager';

    appendVote(id, name, text);
    return ok();

  } catch (err) {
    // Never leak internals to the caller. The owner can see real errors in the
    // Apps Script execution log.
    return fail('could not record recommendation');
  }
}

/**
 * A GET returns a plain note rather than an error, so that opening the URL in
 * a browser during setup shows something intelligible instead of a stack trace.
 * It deliberately reveals nothing about the spreadsheet.
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
 * Append exactly one row to the Votes tab.
 *
 * Every safety property of this script lives in this function, so it is worth
 * reading slowly:
 *   - the tab is named by a constant, never by anything the caller sent;
 *   - the name is checked against the forbidden list before anything happens;
 *   - appendRow adds a row and has no way to alter an existing one.
 */
function appendVote(id, name, text) {
  if (FORBIDDEN_TABS.indexOf(VOTES_TAB) !== -1) {
    throw new Error('refusing to write to a protected tab');
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(VOTES_TAB);
  if (!sheet) {
    throw new Error('the "' + VOTES_TAB + '" tab does not exist');
  }

  sheet.appendRow([new Date(), id, name, text]);
}

function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ok: true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function fail(why) {
  return ContentService
    .createTextOutput(JSON.stringify({ok: false, error: why}))
    .setMimeType(ContentService.MimeType.JSON);
}
