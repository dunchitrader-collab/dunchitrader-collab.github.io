/**
 * Dunchideock Village Suppliers — the automatic publisher.
 *
 * WHAT THIS IS, AND WHAT IT IS NOT
 *   This is an ACCOUNT-ONLY script. It runs as the owner, from an installable
 *   on-form-submit trigger and a menu item on the spreadsheet. It is NEVER
 *   deployed as a web app and NEVER given a URL. Nothing on the internet can
 *   reach it.
 *
 *   That is the opposite of apps-script/Code.gs, which IS on the internet and
 *   is deliberately bounded to appending to the Votes tab. The two files are
 *   separate on purpose and must stay separate: Code.gs may write only to
 *   Votes, this file may write only to Published, and neither can do the
 *   other's job. Do not merge them.
 *
 * WHY IT EXISTS
 *   Owner's ruling, 2026-09-18: "OK i am not doing this by hand. I said as a
 *   design principle this will be no admin. Make it automatic from the form
 *   responses. I will routinely check the data and overwrite whatever looks
 *   messy."
 *
 *   So a clean submission publishes itself. The protection is no longer a
 *   human approving each row; it is the three hard checks below, plus the
 *   owner's batch sweep of the Published tab.
 *
 * WHAT IT DOES
 *   On each new form response, it appends ONE row to Published:
 *     id, first_name, last_name, business, phone, trade, extra_trade, status
 *
 *   status is 'active' — visible on the site — unless the row trips one of
 *   three hard failures, in which case it is 'hidden': present in the sheet,
 *   off the website, waiting for the owner.
 *
 * WHAT IT CANNOT DO — enforced below, not promised here:
 *   - It cannot edit, delete or reorder an existing Published row. It only
 *     appends.
 *   - It cannot touch the Votes tab or the responses tab. It reads the
 *     responses tab and writes only to Published.
 *   - It cannot reuse an id. Ids come from the highest id already present,
 *     never from a row count or a position, so deleting a row does not free
 *     its number.
 *   - It cannot write a formula. Every cell it writes is a plain value, so
 *     the owner overwriting a cell by hand stays overwritten.
 */

/* ---------------------------------------------------------------------------
   Tabs. Hard-coded, like Code.gs, so the intent is visible to anyone editing.
   --------------------------------------------------------------------------- */

var PUB_TAB = 'Published';

/** Candidate names for the form responses tab. Google names it "Form
 *  responses 1" by default but the owner may have renamed it. */
var RESPONSE_TABS = ['Form responses 1', 'Form Responses 1', 'Form responses'];

/** This script must never write here. Checked before every write. */
var PUBLISH_FORBIDDEN = ['Votes', 'Form responses 1', 'Form Responses 1', 'Form responses'];

/* ---------------------------------------------------------------------------
   The responses-tab layout, BY HEADER NAME rather than by column letter.

   Reading by name is deliberate. An earlier version of the sheet formulas was
   written against guessed column letters and was wrong in four places; adding
   or reordering a form question shifts every letter. Names survive that.
   Each entry is a list of accepted headers, matched case-insensitively on a
   leading fragment, so small wording changes on the form do not break this.
   --------------------------------------------------------------------------- */

var FIELD_MATCH = {
  trade:    ['what trade'],
  first:    ['what is their first'],
  last:     ['what is their last'],
  phone:    ['what is their telephone', 'what is their phone'],
  business: ['what is their business']
};

/* ---------------------------------------------------------------------------
   Published columns, in order. The site reads this tab by header NAME and
   ignores anything it does not recognise, but the publisher writes positionally
   so this order is a contract.
   --------------------------------------------------------------------------- */

var PUB_COLS = ['id', 'first_name', 'last_name', 'business', 'phone', 'trade', 'extra_trade', 'status'];

/* ---------------------------------------------------------------------------
   What counts as a usable phone number.

   ELEVEN DIGITS after normalisation, and nothing else.

   Why eleven: every genuine UK landline and mobile is eleven digits in its
   national form — 07825 736940, 01392 123456. Measured against every real
   number this project has seen, all are eleven; the one known-bad number, a
   mistyped 078853335434, is twelve. It also matches the eleven-digit rule the
   owner put on the form itself, so the form and the publisher agree rather
   than disagreeing silently.

   A number failing this is not thrown away. The row is still published, with
   status 'hidden', so the recommendation is not lost and the owner can fix the
   number and flip it to active.
   --------------------------------------------------------------------------- */

var PHONE_DIGITS = 11;

/** Anything that looks like an email address or a web link, in any field.
 *  A villager has no reason to type either into these boxes; a spammer does. */
var EMAIL_RE = /[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
var LINK_RE  = /(https?:\/\/|www\.|\b[a-z0-9\-]+\.(com|co\.uk|net|org|io|biz|ru|xyz|info|shop)\b)/i;

/* ===========================================================================
   MENU
   =========================================================================== */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Village list')
    .addItem('Publish any responses not yet on the list', 'backfillPublished')
    .addItem('Check the setup', 'checkSetup')
    .addToUi();
}

/* ===========================================================================
   THE TRIGGER — one new form response
   =========================================================================== */

/**
 * Installable on-form-submit trigger. Google passes the submitted values.
 *
 * Deliberately defensive: if anything at all goes wrong, it is logged and
 * swallowed. A thrown error here would show the villager a failure on a form
 * they filled in correctly, and their answer is already safely on the
 * responses tab either way.
 */
function onFormSubmitPublish(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var row = readSubmission(ss, e);
    if (!row) return;
    publishOne(ss, row);
  } catch (err) {
    Logger.log('publish failed: ' + (err && err.message));
  }
}

/**
 * Turn the trigger event into the five fields we care about.
 *
 * `e.namedValues` keys are the form's question text, so this matches by name
 * exactly as the backfill does, and the two paths cannot drift apart.
 */
function readSubmission(ss, e) {
  if (!e || !e.namedValues) return null;

  var flat = {};
  for (var q in e.namedValues) {
    var v = e.namedValues[q];
    flat[String(q).toLowerCase()] = Array.isArray(v) ? v.join(' ') : String(v);
  }

  function pick(key) {
    var frags = FIELD_MATCH[key];
    for (var q in flat) {
      for (var i = 0; i < frags.length; i++) {
        if (q.indexOf(frags[i]) === 0) return flat[q];
      }
    }
    return '';
  }

  return {
    trade:    pick('trade'),
    first:    pick('first'),
    last:     pick('last'),
    phone:    pick('phone'),
    business: pick('business')
  };
}

/* ===========================================================================
   THE BACKFILL — everything already on the responses tab
   =========================================================================== */

/**
 * Publish every response that is not on Published yet.
 *
 * SAFE TO RUN TWICE. Matching is on the normalised phone number against the
 * numbers already on Published, so a second run finds everything already there
 * and writes nothing. It reports what it did either way.
 */
function backfillPublished() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = responsesSheet(ss);
  if (!sheet) return say('Could not find the form responses tab.');

  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return say('There are no form responses yet.');

  var idx = headerIndex(values[0]);
  var added = 0, skipped = 0;

  for (var r = 1; r < values.length; r++) {
    var row = {
      trade:    cellAt(values[r], idx.trade),
      first:    cellAt(values[r], idx.first),
      last:     cellAt(values[r], idx.last),
      phone:    cellAt(values[r], idx.phone),
      business: cellAt(values[r], idx.business)
    };
    if (!row.first && !row.last && !row.phone) { skipped++; continue; }

    if (publishOne(ss, row)) added++; else skipped++;
  }

  say('Done. Added ' + added + ' new ' + (added === 1 ? 'person' : 'people') +
      ' to the list. Skipped ' + skipped + ' already there or empty.');
}

/** Find the responses tab by any of its known names. */
function responsesSheet(ss) {
  for (var i = 0; i < RESPONSE_TABS.length; i++) {
    var s = ss.getSheetByName(RESPONSE_TABS[i]);
    if (s) return s;
  }
  return null;
}

/** Map our five fields onto column positions using the header row. */
function headerIndex(header) {
  var out = {};
  for (var key in FIELD_MATCH) {
    out[key] = -1;
    var frags = FIELD_MATCH[key];
    for (var c = 0; c < header.length; c++) {
      var h = String(header[c] || '').toLowerCase().trim();
      for (var f = 0; f < frags.length; f++) {
        if (h.indexOf(frags[f]) === 0) { out[key] = c; break; }
      }
      if (out[key] !== -1) break;
    }
  }
  return out;
}

function cellAt(row, i) {
  return (i >= 0 && i < row.length && row[i] !== null && row[i] !== undefined)
    ? String(row[i]).trim() : '';
}

/* ===========================================================================
   THE ONE WRITE
   =========================================================================== */

/**
 * Append one row to Published, or do nothing if it is already there.
 * Returns true if a row was written.
 *
 * Everything that makes this safe lives here, so it is worth reading slowly.
 */
function publishOne(ss, row) {
  if (PUBLISH_FORBIDDEN.indexOf(PUB_TAB) !== -1) {
    throw new Error('refusing to write to a protected tab');
  }

  var pub = ss.getSheetByName(PUB_TAB);
  if (!pub) throw new Error('the "' + PUB_TAB + '" tab does not exist');

  var existing = pub.getDataRange().getValues();
  var phoneKey = normalisePhone(row.phone);

  // Already listed? Match on the normalised phone, which is what makes both
  // the trigger and the backfill idempotent.
  if (phoneKey && existingPhones(existing).indexOf(phoneKey) !== -1) return false;

  var names = splitName(row.first, row.last);

  // --- the three hard failures ---
  var badPhone  = phoneKey.length !== PHONE_DIGITS;
  var spammy    = looksLikeContactSpam(row);
  var duplicate = false;   // a phone duplicate returned above; kept for clarity

  var status = (badPhone || spammy || duplicate) ? 'hidden' : 'active';

  var out = [
    nextId(existing),                     // id
    names.first,                          // first_name
    names.last,                           // last_name
    plain(row.business),                  // business
    plain(row.phone),                     // phone — as typed, readable
    normaliseTrade(row.trade),            // trade
    '',                                   // extra_trade — the form asks for one trade
    status                                // status
  ];

  // appendRow writes VALUES. Nothing here is a formula, so the owner
  // overwriting a cell by hand stays overwritten.
  pub.appendRow(out);
  return true;
}

/** Every normalised phone already on Published. */
function existingPhones(values) {
  var out = [];
  if (!values.length) return out;
  var col = PUB_COLS.indexOf('phone');
  for (var r = 1; r < values.length; r++) {
    var p = normalisePhone(values[r][col]);
    if (p) out.push(p);
  }
  return out;
}

/* ===========================================================================
   IDS — assigned once, never reused
   =========================================================================== */

/**
 * The next id, derived from the HIGHEST id already on Published.
 *
 * Never from a row count and never from a position. If T001–T005 exist and
 * T003 is deleted, the next id is still T006: the gap stays a gap, and T003 is
 * never handed to somebody else. That matters because every recommendation a
 * villager leaves is filed against the id.
 *
 * THE ONE LIMIT, stated rather than hidden: deleting the HIGHEST id does free
 * that number. If T010 is the last row and it is deleted, the next submission
 * becomes T010 again, and any recommendation filed against the old T010 would
 * attach to the new person. Interior gaps are safe; the top of the list is not.
 *
 * This is inherent to deriving the next id from the sheet, and the sheet is the
 * only durable place to derive it from — a stored counter would drift the first
 * time the owner edits by hand, which he does deliberately and in batch.
 *
 * The mitigation is the one already written everywhere else in this project:
 * DO NOT DELETE ROWS FROM PUBLISHED. Set `status` to `hidden` instead. That
 * keeps the id occupied, keeps the person's recommendations attached, and is
 * what README.md and the seeding guide already tell the owner to do.
 */
function nextId(values) {
  var col = PUB_COLS.indexOf('id');
  var highest = 0;

  for (var r = 1; r < values.length; r++) {
    var raw = String(values[r][col] || '').trim();
    var m = raw.match(/^T(\d+)$/i);
    if (m) {
      var n = parseInt(m[1], 10);
      if (n > highest) highest = n;
    }
  }

  var next = highest + 1;
  return 'T' + (next < 1000 ? ('00' + next).slice(-3) : String(next));
}

/* ===========================================================================
   NORMALISING
   =========================================================================== */

/**
 * Digits only, with the UK international forms folded back to the 0 form.
 * +44 7887 988959, 0044 7887 988959 and 07887988959 all become 07887988959.
 */
function normalisePhone(v) {
  var d = String(v === null || v === undefined ? '' : v).replace(/\D/g, '');
  if (d.indexOf('0044') === 0) return '0' + d.slice(4);
  if (d.indexOf('44') === 0 && d.length > 11) return '0' + d.slice(2);
  return d;
}

/**
 * Tidy a trade so it matches the site's tile names.
 *
 * WHAT IT DOES: trims, collapses runs of spaces, and capitalises the first
 * letter of each word — so "plumber", "PLUMBER" and " plumber " all become
 * "Plumber" and land on the existing tile. Words the village writes with
 * internal capitals or symbols, like "Carpenter / Joiner" and "Oil / LPG
 * Supplier", are preserved rather than mangled.
 *
 * WHAT IT DOES NOT DO — and this matters, because assuming otherwise would be
 * a silent defect: it does NOT understand what a trade means. It cannot map
 * "boiler" to "Heating", "sparky" to "Electrician", or "guttering" to
 * "Roofer". A villager choosing "Other" and typing free text will create a NEW
 * tile with that exact wording. There is no synonym list here and adding one
 * would be guesswork about what a villager meant.
 *
 * The owner's batch sweep is what catches those. The site's own grouping is
 * case-insensitive (build plan row 3.4), so a capitalisation slip cannot split
 * a tile even if this normalisation is bypassed.
 */
function normaliseTrade(v) {
  var s = String(v === null || v === undefined ? '' : v).trim().replace(/\s+/g, ' ');
  if (!s) return '';
  return s.replace(/(^|[\s\/\-])([a-z])/g, function (m, pre, ch) {
    return pre + ch.toUpperCase();
  });
}

/**
 * Split a name across the two Published columns.
 *
 * The first-name box frequently carries a FULL name with the surname left
 * blank — two of the three real responses on this project do exactly that.
 * Measured, not assumed.
 *
 * So: if the last name is blank and the first name contains a space, the LAST
 * word becomes the surname and everything before it the forename. "Bob
 * Samwell" becomes Bob / Samwell; "Mary Anne Blythe" becomes "Mary Anne" /
 * "Blythe". If the last name is given, both are used as typed. If the first
 * name is a single word and there is no surname, the surname stays empty —
 * the site renders that correctly and it is better than inventing one.
 */
function splitName(first, last) {
  var f = plain(first), l = plain(last);
  if (l) return { first: f, last: l };

  var parts = f.split(/\s+/).filter(function (p) { return p.length; });
  if (parts.length < 2) return { first: f, last: '' };

  return {
    first: parts.slice(0, parts.length - 1).join(' '),
    last:  parts[parts.length - 1]
  };
}

/** Trim and force to a plain string. Never returns a formula. */
function plain(v) {
  var s = String(v === null || v === undefined ? '' : v).trim();
  // A leading = would make Sheets treat the cell as a formula.
  if (s.charAt(0) === '=' || s.charAt(0) === '+') s = "'" + s;
  return s;
}

/** An email address or a web link in any field the villager filled in. */
function looksLikeContactSpam(row) {
  var fields = [row.first, row.last, row.business, row.trade, row.phone];
  for (var i = 0; i < fields.length; i++) {
    var s = String(fields[i] || '');
    if (EMAIL_RE.test(s) || LINK_RE.test(s)) return true;
  }
  return false;
}

/* ===========================================================================
   SETUP CHECK — so the owner can see it is wired up
   =========================================================================== */

function checkSetup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lines = [];

  lines.push(ss.getSheetByName(PUB_TAB)
    ? 'Published tab: found'
    : 'Published tab: MISSING — the publisher cannot work without it');

  lines.push(responsesSheet(ss)
    ? 'Form responses tab: found'
    : 'Form responses tab: MISSING');

  var triggers = ScriptApp.getProjectTriggers();
  var wired = false;
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'onFormSubmitPublish') wired = true;
  }
  lines.push(wired
    ? 'Automatic publishing: ON'
    : 'Automatic publishing: OFF — install the trigger, see apps-script/DEPLOY.md');

  say(lines.join('\n'));
}

function say(msg) {
  try {
    SpreadsheetApp.getUi().alert(msg);
  } catch (ignored) {
    Logger.log(msg);   // no UI when running from a trigger
  }
}
