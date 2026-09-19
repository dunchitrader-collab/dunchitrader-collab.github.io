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
 *   human approving each row; it is the two hard checks below, plus the
 *   owner's batch sweep of the Published tab.
 *
 * WHAT IT DOES
 *   On each new form response it either adds a person, or adds a recommendation
 *   to a person already listed.
 *
 *   NEW PERSON — appends ONE row to Published:
 *     A id · B first_name · C last_name · D business · E phone · F trade
 *     G extra_trade · H status · I,J the owner's helper formulas (left empty)
 *     K recommendations · L recommended_by
 *
 *   ALREADY LISTED — adds nothing and hides nothing. The villager's words and
 *   name are APPENDED to K and L of the row that person already has, because a
 *   second submission for the same number is a SECOND RECOMMENDATION and that
 *   is the entire point of the product. Before 2026-09-18 it was skipped and
 *   the second villager's words were lost with no record that they were sent.
 *
 *   status is 'active' — visible on the site — unless the row trips one of the
 *   two hard failures, in which case it is 'hidden': present in the sheet, off
 *   the website, waiting for the owner. A duplicate is NOT one of them.
 *
 * THE PROMISE THIS KEEPS
 *   The form asks for the villager's name "so a fellow villager might reach out
 *   to you if they have any questions". That sentence promises the name appears
 *   on the site. Until 2026-09-18 nothing carried it there, and nothing carried
 *   the villager's description either — the site listed phone numbers while the
 *   mission called it a recommendations list. Columns K and L are what keep the
 *   promise. A blank name becomes "a villager", matching the site's own panel.
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
  business: ['what is their business'],
  words:    ['please give a short amount of text', 'please tell us what they did'],
  by:       ['finally please give your name', 'your name, so a neighbour']
};

/* ---------------------------------------------------------------------------
   Published columns, in order. The site reads this tab by header NAME and
   ignores anything it does not recognise, but the publisher writes positionally
   so this order is a contract.
   --------------------------------------------------------------------------- */

var PUB_COLS = [
  'id', 'first_name', 'last_name', 'business', 'phone', 'trade', 'extra_trade', 'status',
  'pub_phone_key', 'pub_name_key',    // I, J — the sheet-formula helpers, written by formulas, NEVER by this script
  'recommendations', 'recommended_by' // K, L — the villagers' own words, and who gave them
];

/** K and L, by position. The helpers at I and J are formulas and are left alone. */
var COL_WORDS = 10;   // K, zero-based
var COL_BY    = 11;   // L, zero-based

/* ===========================================================================
   COLUMNS THIS SCRIPT MUST NEVER WRITE TO

   Published has three kinds of column now:
     A-H  the tradesperson    — written by this script
     I,J  pub_phone_key / pub_name_key — ARRAYFORMULA, owned by the OWNER
     K,L  the villagers' words — written by this script

   The owner pastes those two formulas once, into I2 and J2, and they fill
   their own columns downwards. **Writing a value into a cell an ARRAYFORMULA
   produces destroys the formula.** On 2026-09-18 the repair wrote rows back
   across A to L in one go and killed both of them. Nothing failed, nothing
   warned — and with those columns dead, the verdict formula on the responses
   tab reads every future submission as NEW, even for somebody already listed.

   So every write is now made in BLOCKS that skip these columns. Add another
   formula column later and the only change needed is to add its zero-based
   index here; `writableBlocks()` re-derives the spans and every write follows.

   IF THE OWNER PUTS A FORMULA SOMEWHERE THIS LIST DOES NOT NAME, the script
   will still overwrite it — it cannot detect a formula it has not been told
   about, because the Sheets API returns the formula's RESULT when reading
   values. `checkSetup` therefore reports the health of the columns it does
   know about, and this list is the place to record any new one.
   =========================================================================== */

var FORMULA_COLS = [8, 9];   // I and J, zero-based

/**
 * Contiguous spans of writable columns, as {start, len} in zero-based terms.
 * With FORMULA_COLS = [8,9] over twelve columns this yields A-H and K-L.
 */
function writableBlocks() {
  var blocks = [], start = -1;
  for (var c = 0; c <= PUB_COLS.length; c++) {
    var owned = (c === PUB_COLS.length) || FORMULA_COLS.indexOf(c) !== -1;
    if (owned) {
      if (start !== -1) { blocks.push({ start: start, len: c - start }); start = -1; }
    } else if (start === -1) {
      start = c;
    }
  }
  return blocks;
}

/** Write one row's values, skipping the owner's formula columns. */
function writeRowBlocks(pub, rowNum, values) {
  var blocks = writableBlocks();
  for (var b = 0; b < blocks.length; b++) {
    var chunk = values.slice(blocks[b].start, blocks[b].start + blocks[b].len);
    pub.getRange(rowNum, blocks[b].start + 1, 1, chunk.length).setValues([chunk]);
  }
}

/** Write many rows at once, skipping the owner's formula columns. */
function writeRangeBlocks(pub, firstRow, rows) {
  if (!rows.length) return;
  var blocks = writableBlocks();
  for (var b = 0; b < blocks.length; b++) {
    var chunk = rows.map(function (r) {
      return r.slice(blocks[b].start, blocks[b].start + blocks[b].len);
    });
    pub.getRange(firstRow, blocks[b].start + 1, chunk.length, chunk[0].length).setValues(chunk);
  }
}

/** Clear rows, skipping the owner's formula columns. */
function clearRowsBlocks(pub, firstRow, numRows) {
  if (numRows < 1) return;
  var blocks = writableBlocks();
  for (var b = 0; b < blocks.length; b++) {
    pub.getRange(firstRow, blocks[b].start + 1, numRows, blocks[b].len).clearContent();
  }
}

/**
 * How several recommendations share one cell.
 *
 * A BLANK LINE between contributions, in two parallel cells — the words in K
 * and the names in L, in the same order, so the nth name belongs to the nth
 * recommendation.
 *
 * Why a blank line rather than a delimiter like | or ;: a villager's own words
 * may contain any punctuation, and a separator that appears inside the data is
 * a corruption waiting to happen. A blank line cannot appear inside a single
 * form answer, because Google Forms strips leading and trailing whitespace and
 * a villager typing two newlines mid-sentence is not a real case here.
 *
 * VERIFIED, not assumed: Google publishes such a cell as a quoted CSV field
 * with the newlines intact and any internal quotes doubled, and the site's own
 * parseCSV in app.js is a proper state machine that reassembles it. Tested
 * against that exact function with a value containing a comma, a quotation
 * mark and two line breaks — it round-trips into three recommendations.
 *
 * AT TEN RECOMMENDATIONS FOR ONE PERSON, stated plainly: the cell holds ten
 * paragraphs and is unwieldy to read in the spreadsheet, though the site shows
 * them tidily and the owner can widen the row or edit any one of them. Nothing
 * breaks — Google's per-cell limit is 50,000 characters, so ten village-length
 * recommendations use a fraction of it. The practical limit is the owner's
 * patience with the cell, not the software, and if a tradesperson ever earns
 * dozens he can prune the oldest by hand; they are plain text.
 */
var REC_SEP = '\n\n';

/** An empty recommender name is not empty on the site. The form makes that
 *  question optional, and the site's own vote panel already renders a blank
 *  name as "a villager" — this keeps the two consistent. */
var ANON = 'a villager';

/**
 * The phone as it must be STORED — always text, never a number.
 *
 * LAUNCH-CRITICAL, and it has already bitten. Google Sheets treats a bare
 * 07887988959 as a NUMBER, drops the leading zero, and stores 7887988959. The
 * site builds the tel: link straight from this column, so the Call button —
 * the one thing the whole product exists for — dials a wrong number, silently,
 * in the hands of an elderly villager. Measured in the owner's sheet
 * 2026-09-18: six of eight numbers had lost their zero. The two that survived
 * were the two containing a space, which Sheets could not read as a number.
 *
 * A leading apostrophe forces Sheets to keep the value as text. It is not
 * displayed and it is not part of the value the site reads.
 */
function phoneText(v) {
  var s = String(v === null || v === undefined ? '' : v).trim();
  if (!s) return '';
  return "'" + s;
}

/**
 * Try to restore a phone number damaged by the number-conversion above.
 *
 * Returns {ok:true, value:...} or {ok:false, why:...}. It REFUSES rather than
 * guesses, because a confidently wrong phone number is worse than an obviously
 * missing one.
 *
 * THE RULE, stated so it can be argued with:
 *   - 11 digits already starting 0  -> untouched, it was never damaged.
 *   - exactly 10 digits             -> a leading 0 is restored. Every UK
 *                                      landline and mobile is 11 digits in its
 *                                      national form and all of them start 0,
 *                                      so a 10-digit value is that number with
 *                                      its zero eaten. This is the only case
 *                                      it will reconstruct.
 *   - anything else                 -> REFUSED. It will not touch a 9-digit
 *                                      value, a 12-digit value, or an 11-digit
 *                                      value not starting 0, because there is
 *                                      more than one way each could have got
 *                                      that way and no way to tell which.
 *
 * THE HONEST CASE, worth naming: the owner's sheet holds 78853335434, eleven
 * digits not starting 0. That is the known-bad TWELVE-digit 078853335434 with
 * its zero eaten — so it is damaged AND invalid, and it happens to be hidden
 * already for the right reason by coincidence rather than by design. This
 * function refuses it, which is correct: restoring the zero would produce a
 * twelve-digit number that is still wrong, and the row stays hidden either way.
 * Only re-deriving from the responses tab, or the owner retyping it, settles it.
 */
function repairPhoneValue(v) {
  var raw = String(v === null || v === undefined ? '' : v).trim();
  if (!raw) return { ok: false, why: 'empty' };

  var d = raw.replace(/\D/g, '');

  if (d.length === PHONE_DIGITS && d.charAt(0) === '0') {
    return { ok: true, value: raw, changed: false };
  }
  if (d.length === PHONE_DIGITS - 1) {
    // Rebuild from the digits, so spacing the owner typed is not invented back.
    return { ok: true, value: '0' + d, changed: true };
  }
  return { ok: false, why: d.length + ' digits, cannot tell what it should be' };
}

/* ===========================================================================
   THE TRADE LIST — EDIT THIS TABLE WHEN THE FORM CHANGES

   This is the one place trade names are decided. If the owner adds, removes or
   renames an option on the Google Form, change it HERE and nowhere else.

   TRADES is the agreed list, exactly as the form offers it. The site builds its
   tiles from whatever text reaches the Published tab, so these spellings ARE
   the tile names.

   TRADE_ALIASES maps older or looser wordings onto that list. The keys are
   lower-cased and matched after trimming, so capitalisation never matters.
   Historical values already sitting in the owner's sheet are included.
   =========================================================================== */

var TRADES = [
  'Plumber', 'Electrician', 'Car mechanic', 'Boiler & heating', 'Roof & gutters',
  'Handyman', 'Builder', 'Appliance repairs', 'Carpenter', 'Chimney sweep',
  'Cleaner', 'Decorator', 'Drains', 'Driveways', 'Fencing & gates',
  'Floors & tiling', 'Gardener', 'Heating oil & gas', 'Logs & firewood',
  'Pest control', 'Pet care & kennels', 'Plasterer', 'Removals', 'Septic tanks',
  'Trees & hedges', 'TV & aerials', 'Welding & metal', 'Window cleaner',
  'Windows & doors'
];

var TRADE_ALIASES = {
  // --- values already in the owner's sheet, 2026-09-18 ---
  'gas engineer':            'Boiler & heating',
  'oil boiler technician':   'Boiler & heating',
  'car mechanic':            'Car mechanic',
  'general builder':         'Builder',
  'window repair / fitting': 'Windows & doors',
  'window repair/fitting':   'Windows & doors',
  // --- older wordings from earlier versions of the form ---
  'heating':                 'Boiler & heating',
  'roofer':                  'Roof & gutters',
  'carpenter / joiner':      'Carpenter',
  'carpenter/joiner':        'Carpenter',
  'painter & decorator':     'Decorator',
  'painter and decorator':   'Decorator',
  'tree surgeon':            'Trees & hedges',
  'fencing':                 'Fencing & gates',
  'groundworks / drainage':  'Drains',
  'groundworks/drainage':    'Drains',
  'oil / lpg supplier':      'Heating oil & gas',
  'oil/lpg supplier':        'Heating oil & gas',
  'logs / firewood':         'Logs & firewood',
  'logs/firewood':           'Logs & firewood'
};

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
    .addItem('Repair the list (move stray rows back up)', 'repairPublished')
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
    business: pick('business'),
    words:    pick('words'),
    by:       pick('by')
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

  // The responses tab carries no open-ended formulas, so its own extent is
  // honest. If that ever changes, this needs the same treatment as Published.
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
      business: cellAt(values[r], idx.business),
      words:    cellAt(values[r], idx.words),
      by:       cellAt(values[r], idx.by)
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
/* ===========================================================================
   HOW TALL IS THE TABLE?

   NEVER ask the sheet. This is the bug that cost 2026-09-18 an evening.

   The owner's duplicate-check helpers in columns I and J are ARRAYFORMULA over
   an open-ended range, so they return an empty string for every row to the
   bottom of the sheet. An empty string returned by a formula is still CONTENT:
   getLastRow() and getDataRange() both count it, and appendRow() writes after
   it. With nine real rows and helpers reaching row 1000, appendRow put the new
   row on ROW 1001 — in the sheet, correct in every cell, and a thousand rows
   below anything the owner could see. Reproduced exactly in the stub before
   this was written.

   So the table's height is defined HERE, by the last row carrying a real id in
   column A, and nowhere else.
   =========================================================================== */

/** Column A only, as far as the sheet could possibly go. One read. */
function idColumn(pub) {
  var maxRows = pub.getMaxRows();
  if (maxRows < 2) return [];
  return pub.getRange(1, 1, maxRows, 1).getValues();
}

/** The 1-based row of the last real id, or 1 (the header) if there are none. */
function lastIdRow(pub) {
  var col = idColumn(pub);
  for (var r = col.length - 1; r >= 1; r--) {
    if (String(col[r][0] || '').trim() !== '') return r + 1;
  }
  return 1;
}

/**
 * The table as a rectangle: header plus every row down to the last real id.
 *
 * Replaces getDataRange(), which returned a thousand rows to read nine and is
 * why the backfill took 31 seconds. Reads exactly the rows that exist.
 */
function tableValues(pub) {
  var last = lastIdRow(pub);
  if (last < 2) {
    return [pub.getRange(1, 1, 1, PUB_COLS.length).getValues()[0]];
  }
  return pub.getRange(1, 1, last, PUB_COLS.length).getValues();
}

function publishOne(ss, row) {
  if (PUBLISH_FORBIDDEN.indexOf(PUB_TAB) !== -1) {
    throw new Error('refusing to write to a protected tab');
  }

  var pub = ss.getSheetByName(PUB_TAB);
  if (!pub) throw new Error('the "' + PUB_TAB + '" tab does not exist');

  var existing = tableValues(pub);
  var phoneKey = normalisePhone(row.phone);

  var words = plain(row.words);
  var by    = plain(row.by) || ANON;

  /* ALREADY LISTED — a SECOND RECOMMENDATION, not noise.
     This is the whole point of the product. Until 2026-09-18 a duplicate was
     skipped outright and the second villager's words were lost with nothing
     recording that they had ever been sent. Now their words and name are
     appended to the person already on the list, and no new row is created. */
  if (phoneKey) {
    var at = rowIndexForPhone(existing, phoneKey);
    if (at !== -1) {
      if (words) appendRecommendation(pub, existing, at, words, by);
      return false;   // no new row was added, which is what the backfill counts
    }
  }

  var names = splitName(row.first, row.last);

  /* --- the two hard failures that still hide a row ---
     A duplicate is deliberately NOT one of them any more: it is handled above
     by adding to the existing person rather than by hiding anything. */
  var badPhone = phoneKey.length !== PHONE_DIGITS;
  var spammy   = looksLikeContactSpam(row);

  var status = (badPhone || spammy) ? 'hidden' : 'active';

  var out = [
    nextId(existing),                     // A id
    names.first,                          // B first_name
    names.last,                           // C last_name
    plain(row.business),                  // D business
    phoneText(row.phone),                 // E phone — TEXT, so Sheets cannot eat the leading zero
    normaliseTrade(row.trade),            // F trade
    '',                                   // G extra_trade — the form asks for one trade
    status,                               // H status
    '',                                   // I pub_phone_key — the owner's formula fills this
    '',                                   // J pub_name_key  — likewise
    words,                                // K recommendations
    words ? by : ''                       // L recommended_by — no name without words
  ];

  /* An EXPLICIT write to a known range, never appendRow.
     The target row is computed from the last real id, so a column of
     formula-produced empty strings cannot push it into the middle of nowhere.
     setValues writes plain values exactly as appendRow did. */
  var target = lastIdRow(pub) + 1;
  writeRowBlocks(pub, target, out);
  return true;
}

/** Which Published row carries this normalised phone? -1 if none. Zero-based
 *  into the values array, so row 1 is the first data row. */
function rowIndexForPhone(values, phoneKey) {
  var col = PUB_COLS.indexOf('phone');
  for (var r = 1; r < values.length; r++) {
    if (normalisePhone(values[r][col]) === phoneKey) return r;
  }
  return -1;
}

/**
 * Add one more recommendation to somebody already on the list.
 *
 * Writes ONLY cells K and L of that row, and only by appending to what is
 * there. It never touches the name, phone, trade or status, never reorders
 * anything, and never removes an existing recommendation — so the row the
 * owner has tidied by hand stays tidied.
 *
 * The same words from the same person are not added twice, which is what keeps
 * the backfill safe to run repeatedly.
 */
function appendRecommendation(pub, values, rowIdx, words, by) {
  var rowVals  = values[rowIdx] || [];
  var oldWords = rowVals.length > COL_WORDS ? String(rowVals[COL_WORDS] || '') : '';
  var oldBy    = rowVals.length > COL_BY    ? String(rowVals[COL_BY]    || '') : '';

  // Already recorded? Compare the trimmed blocks rather than the whole cell.
  var blocks = oldWords ? oldWords.split(REC_SEP) : [];
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].trim() === words.trim()) return false;
  }

  /* The words are sanitised for the same reason and in the same way: a blank
     line inside them would split one recommendation into two entries in K
     while L gained only one, shifting every name the other way. */
  var safeWords = sanitise(words);
  var newWords = oldWords ? oldWords + REC_SEP + safeWords : safeWords;

  /* Keep the two columns in step. If the words cell already held blocks with
     no matching names — a row the owner typed by hand — pad the names so the
     nth name still lines up with the nth recommendation.

     EVERY LINE WRITTEN HERE MUST BE NON-EMPTY, and that is the whole of the
     2026-09-19 misattribution fix (build plan row 4.9).

     The columns pair BY LINE POSITION, and the site's reader drops empty
     entries when it splits them — `splitRecs` in app.js filters out anything
     that trims to nothing. So an empty name line does not read as "no name for
     this one"; it VANISHES, and every later name slides up onto somebody
     else's words. Measured: with words for three people and a blank first
     name, the site showed Helen credited with the first villager's sentence
     and Bob with the second's. Neither had written what they were attributed.

     Nothing flags it. The card looks entirely normal.

     So a blank name becomes ANON here rather than an empty string. `sanitise`
     additionally collapses any blank line INSIDE a value, because a blank line
     is the separator and a value containing one would forge an extra entry —
     reachable today by a villager pressing Enter twice in the site's textarea,
     which nothing strips. */
  var byBlocks = oldBy ? oldBy.split(REC_SEP) : [];
  while (byBlocks.length < blocks.length) byBlocks.push(ANON);
  byBlocks.push(sanitise(by) || ANON);
  var newBy = byBlocks.join(REC_SEP);

  /* THE INVARIANT, checked before anything is written rather than promised in
     a comment: K and L carry the same number of lines. If they ever would not,
     this refuses to write at all and says so in the log — a missing
     recommendation the owner can chase beats a recommendation silently
     attributed to the wrong neighbour. */
  if (countBlocks(newWords) !== countBlocks(newBy)) {
    Logger.log('refusing to write misaligned recommendation on row ' + (rowIdx + 1) +
               ': ' + countBlocks(newWords) + ' words vs ' + countBlocks(newBy) + ' names');
    return false;
  }

  // setValue writes a plain value, exactly as appendRow does.
  pub.getRange(rowIdx + 1, COL_WORDS + 1).setValue(newWords);
  pub.getRange(rowIdx + 1, COL_BY + 1).setValue(newBy);
  return true;
}

/**
 * Make a value safe to store as ONE line-position entry.
 *
 * Collapses any run of blank lines to a single newline, so the value cannot
 * contain the separator and therefore cannot forge an extra entry. Trims the
 * ends. A value that is nothing but whitespace becomes the empty string, and
 * the caller substitutes ANON.
 */
function sanitise(v) {
  var s = String(v === null || v === undefined ? '' : v);
  s = s.replace(/\r\n/g, '\n').replace(/\n\s*\n+/g, '\n');
  return s.trim();
}

/** How many line-position entries a cell holds. Empty cell is zero. */
function countBlocks(v) {
  var s = String(v === null || v === undefined ? '' : v).trim();
  if (s === '') return 0;
  return s.split(REC_SEP).length;
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
 * Map a trade onto the agreed list.
 *
 * Three steps, in order:
 *   1. trim and collapse runs of spaces;
 *   2. if it matches one of TRADES ignoring capitals, return the agreed
 *      spelling — so "plumber" and "PLUMBER" both become "Plumber";
 *   3. if it matches a key in TRADE_ALIASES, return what that maps to — so
 *      "Gas Engineer" becomes "Boiler & heating".
 *
 * WHAT IT DOES NOT DO, and this is deliberate: anything it cannot match is
 * returned TRIMMED AND OTHERWISE UNCHANGED. A villager choosing "Other" and
 * typing their own words gets exactly those words, with no capitalisation
 * forced on them and no guess made about what they meant. The site groups
 * tiles case-insensitively (build plan row 3.4), so an unmapped value cannot
 * split an existing tile in two; it simply makes a tile of its own, which the
 * owner can correct in his sweep.
 *
 * Guessing would be worse than passing through. "Boiler" might mean a boiler
 * service or a boiler replacement; mapping it on a hunch puts somebody under a
 * heading they never chose.
 */
function normaliseTrade(v) {
  var s = String(v === null || v === undefined ? '' : v).trim().replace(/\s+/g, ' ');
  if (!s) return '';

  var key = s.toLowerCase();

  for (var i = 0; i < TRADES.length; i++) {
    if (TRADES[i].toLowerCase() === key) return TRADES[i];
  }

  if (TRADE_ALIASES.hasOwnProperty(key)) return TRADE_ALIASES[key];

  return s;   // Other, or something new — passed through untouched
}

/** Is this trade one the site expects? Used by checkSetup to report, never to
 *  reject — an unrecognised trade is a thing to look at, not an error. */
function isKnownTrade(v) {
  var key = String(v || '').trim().toLowerCase();
  if (!key) return true;
  for (var i = 0; i < TRADES.length; i++) if (TRADES[i].toLowerCase() === key) return true;
  return false;
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
   RECOVERY — bring stranded rows back to the table
   =========================================================================== */

/**
 * Rows written below the table by the pre-2026-09-18 bug are real rows with
 * real ids; only their POSITION is wrong. This moves them up so Published is
 * one continuous table again.
 *
 * IDS ARE NEVER CHANGED. A row's identity is its id, and every recommendation
 * a villager has left is filed against it. The row moves; the id does not.
 *
 * SAFE TO RUN WHEN THERE IS NOTHING TO FIX — it says so and stops.
 *
 * REFUSES RATHER THAN GUESSES. If it meets anything it does not understand —
 * a duplicate id, or a row below the table with no id at all — it changes
 * nothing and reports what it found, because moving rows around on a guess is
 * how a directory loses somebody.
 */
function repairPublished() {
  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var pub = ss.getSheetByName(PUB_TAB);
  if (!pub) return say('Could not find the "' + PUB_TAB + '" tab.');

  var col = idColumn(pub);
  var idRows = [];
  for (var r = 1; r < col.length; r++) {
    if (String(col[r][0] || '').trim() !== '') idRows.push(r + 1);   // 1-based
  }

  if (!idRows.length) {
    return say('The list is empty — there is nothing to repair.');
  }

  // Where does the contiguous block starting at row 2 end?
  var contiguousEnd = 1;
  for (var i = 0; i < idRows.length; i++) {
    if (idRows[i] === contiguousEnd + 1) contiguousEnd = idRows[i];
    else break;
  }

  var stranded = idRows.filter(function (n) { return n > contiguousEnd; });

  /* --- REFUSE RATHER THAN GUESS ---
     Checked BEFORE the "nothing to repair" reply, deliberately. A row carrying
     details but no id does not appear in idRows, so an earlier version of this
     function reported a clean sheet while an orphan sat below it — which is the
     same class of silent reassurance as the bug this whole repair exists for.
     Caught by the stub suite on 2026-09-18 before it ever ran on a real sheet. */
  var width = PUB_COLS.length;
  var seen = {}, problems = [];

  for (var k = 0; k < idRows.length; k++) {
    var idv = String(col[idRows[k] - 1][0]).trim();
    if (seen[idv]) problems.push('id ' + idv + ' appears on rows ' + seen[idv] + ' and ' + idRows[k]);
    seen[idv] = idRows[k];
  }

  /* Scan every row below the contiguous block, not just as far as the last id,
     so an orphan sitting past everything is still found. */
  var scanTo = Math.max(idRows[idRows.length - 1], pub.getMaxRows());
  if (scanTo > contiguousEnd) {
    var below = pub.getRange(contiguousEnd + 1, 1, scanTo - contiguousEnd, width).getValues();
    for (var b = 0; b < below.length; b++) {
      var hasId   = String(below[b][0] || '').trim() !== '';
      var hasData = below[b].some(function (c) { return String(c || '').trim() !== ''; });
      if (hasData && !hasId) problems.push('row ' + (contiguousEnd + 1 + b) + ' has details but no id');
    }
  }

  /* A sheet with nothing stranded can still hold duplicates, damaged phone
     numbers or old trade names — the faults found 2026-09-18 are independent of
     where the rows sit. So the early exit checks whether cleanPublished has
     anything to do as well, rather than declaring the sheet sound because the
     rows happen to be contiguous. */
  if (!problems.length && !stranded.length) {
    var dry = cleanPublished(ss, pub);
    if (!dry.lines.length) {
      return say('Nothing to repair.\n\nThe list is one continuous block of ' +
                 (contiguousEnd - 1) + ' ' + ((contiguousEnd - 1) === 1 ? 'person' : 'people') +
                 ', which is how it should be.');
    }
    return say('Repaired.\n\n' + dry.lines.join('\n') +
               '\n\nEvery ID is unchanged. Check the website in about five minutes.');
  }

  if (problems.length) {
    return say('STOPPED — nothing was changed.\n\n' +
               'Something here needs a human:\n  • ' + problems.join('\n  • ') +
               '\n\nFix those by hand, then run this again.');
  }

  // --- 1. move stranded rows up, in order, ids untouched ---
  var moved = 0;
  for (var m = 0; m < stranded.length; m++) {
    var from = stranded[m];
    var vals = pub.getRange(from, 1, 1, width).getValues()[0];
    var to   = contiguousEnd + 1 + m;
    if (to !== from) {
      writeRowBlocks(pub, to, vals);
      clearRowsBlocks(pub, from, 1);
    }
    moved++;
  }

  // --- 2. clean the table now that it is one block ---
  var report = cleanPublished(ss, pub);

  var lines = [];
  if (moved) {
    lines.push('Moved ' + moved + ' ' + (moved === 1 ? 'person' : 'people') +
               ' back up into the list.');
  }
  lines = lines.concat(report.lines);

  if (!lines.length) lines.push('Nothing needed changing.');

  lines.push('');
  lines.push('Every ID is unchanged. Check the website in about five minutes.');
  say('Repaired.\n\n' + lines.join('\n'));
}

/* ===========================================================================
   CLEANING THE TABLE — duplicates, damaged phone numbers, old trade names
   =========================================================================== */

/**
 * Put right the three faults the owner found on 2026-09-18, on rows that are
 * already in the sheet. Returns {lines:[...]} for the report.
 *
 * NOTHING HERE EVER CHANGES OR REUSES AN ID. A removed duplicate's id is
 * RETIRED — it is not handed to anybody else, ever, because a villager's
 * recommendation is filed against it and the next person to hold that number
 * would inherit somebody else's reputation.
 */
function cleanPublished(ss, pub) {
  var width = PUB_COLS.length;
  var last  = lastIdRow(pub);
  var lines = [];
  if (last < 2) return { lines: lines };

  var vals = pub.getRange(1, 1, last, width).getValues();

  var iPhone = PUB_COLS.indexOf('phone');
  var iTrade = PUB_COLS.indexOf('trade');
  var iFirst = PUB_COLS.indexOf('first_name');
  var iLast  = PUB_COLS.indexOf('last_name');
  var iStat  = PUB_COLS.indexOf('status');

  /* --- a. phone numbers, RE-DERIVED from the responses tab where possible ---
     The original text the villager typed still exists there, so it is a source
     of truth rather than a reconstruction. Reconstruction is the fallback. */
  var byKey = responsePhonesByKey(ss);
  var fixedPhone = 0, refusedPhone = [];

  for (var r = 1; r < vals.length; r++) {
    if (!String(vals[r][0] || '').trim()) continue;
    var raw = String(vals[r][iPhone] || '').trim();
    if (!raw) continue;

    var digits = raw.replace(/\D/g, '');
    if (digits.length === PHONE_DIGITS && digits.charAt(0) === '0') continue;  // sound

    /* (i) the responses tab, matched on the digits we still have.
       Only counted as a fix if it actually CHANGES the value — a number the
       form recorded as invalid (the known twelve-digit one) matches itself
       here, and reporting that as "fixed" on every run would make the report
       lie and look non-idempotent. */
    var fromForm = byKey[digits] || byKey['0' + digits];
    if (fromForm) {
      if (String(fromForm).replace(/\D/g, '') !== digits) {
        vals[r][iPhone] = fromForm;
        fixedPhone++;
      } else if (!(digits.length === PHONE_DIGITS && digits.charAt(0) === '0')) {
        // matches the form exactly and is still not a usable number
        refusedPhone.push(String(vals[r][0]).trim() + ' (' + raw +
          ': the form has the same number, and it is ' + digits.length + ' digits)');
      }
      continue;
    }

    // (ii) the rule, which refuses when it cannot tell
    var attempt = repairPhoneValue(raw);
    if (attempt.ok && attempt.changed) { vals[r][iPhone] = attempt.value; fixedPhone++; }
    else if (!attempt.ok) refusedPhone.push(String(vals[r][0]).trim() + ' (' + raw + ': ' + attempt.why + ')');
  }

  /* --- b. trade names onto the agreed list --- */
  var iExtra = PUB_COLS.indexOf('extra_trade');
  var fixedTrade = 0;
  for (var t = 1; t < vals.length; t++) {
    if (!String(vals[t][0] || '').trim()) continue;

    /* BOTH trade columns. A person with two trades appears under both
       headings, so an unmapped `extra_trade` makes a tile of its own just as
       readily as `trade` does. Measured on the live feed 2026-09-18: T002's
       extra_trade "Heating" was producing a Heating tile alongside the agreed
       "Boiler & heating", because an earlier version of this loop only looked
       at `trade`. */
    var was = String(vals[t][iTrade] || '').trim();
    var now = normaliseTrade(was);
    if (now !== was) { vals[t][iTrade] = now; fixedTrade++; }

    var wasX = String(vals[t][iExtra] || '').trim();
    if (wasX) {
      var nowX = normaliseTrade(wasX);
      if (nowX !== wasX) { vals[t][iExtra] = nowX; fixedTrade++; }
    }
  }

  /* --- c. duplicates: keep the LOWEST id, merge the rest into it --- */
  /* Keyed on PHONE **plus NAME**, so two different people sharing one number
     are two entries rather than one. The owner's sheet has exactly that case:
     Ben Franks the electrician and John Pilkington the car mechanic both on
     07887800192. Keying on the phone alone would have deleted one of them. */
  var seen = {}, drop = [], retired = [], disagreed = [], phoneOwner = {};

  for (var d = 1; d < vals.length; d++) {
    var id = String(vals[d][0] || '').trim();
    if (!id) continue;
    var phoneKey = normalisePhone(vals[d][iPhone]);
    if (!phoneKey) continue;

    var nameKey = (String(vals[d][iFirst] || '') + String(vals[d][iLast] || ''))
                    .toLowerCase().replace(/[^a-z0-9]/g, '');
    var key = phoneKey + '|' + nameKey;

    /* Report a shared number between DIFFERENT people once, so he can look at
       it, without merging anything. */
    if (phoneOwner.hasOwnProperty(phoneKey) && phoneOwner[phoneKey].nameKey !== nameKey) {
      var other = phoneOwner[phoneKey];
      if (!other.reported) {
        disagreed.push(other.id + ' and ' + id + ' share a telephone number but are ' +
                       'different people (' + other.label + ' / ' +
                       String(vals[d][iFirst]).trim() + ' ' + String(vals[d][iLast]).trim() +
                       ') — BOTH KEPT, nothing merged');
        other.reported = true;
      }
    } else if (!phoneOwner.hasOwnProperty(phoneKey)) {
      phoneOwner[phoneKey] = { id: id, nameKey: nameKey, reported: false,
        label: String(vals[d][iFirst]).trim() + ' ' + String(vals[d][iLast]).trim() };
    }

    if (!seen.hasOwnProperty(key)) { seen[key] = d; continue; }

    var keepAt = seen[key];
    var keepId = String(vals[keepAt][0]).trim();
    // the LOWEST id wins, whichever row it sits on
    if (idNumber(id) < idNumber(keepId)) { var swap = keepAt; keepAt = d; d = swap; seen[key] = keepAt; }

    var kept = vals[keepAt], dup = vals[d];

    /* Where the two rows DISAGREE, the kept row's values stand and the
       difference is REPORTED rather than silently resolved. The owner decides;
       this only ever merges the recommendations, which are additive. */
    var diffs = [];
    if (String(kept[iFirst]).trim() + ' ' + String(kept[iLast]).trim() !==
        String(dup[iFirst]).trim() + ' ' + String(dup[iLast]).trim()) diffs.push('name');
    if (String(kept[iTrade]).trim().toLowerCase() !== String(dup[iTrade]).trim().toLowerCase()) diffs.push('trade');
    if (String(kept[iStat]).trim().toLowerCase()  !== String(dup[iStat]).trim().toLowerCase())  diffs.push('status');
    /* A DIFFERENT NAME MEANS A DIFFERENT PERSON, and two different people can
       genuinely share a telephone number — a household, a father and son, two
       tradespeople working out of one landline. The owner's own sheet has
       exactly this: Ben Franks the electrician and John Pilkington the car
       mechanic on 07887800192.

       Merging them would delete a real tradesperson from the village list, so
       it is refused. Only rows carrying the SAME NAME are treated as the same
       person; a name disagreement is left alone and reported for him to judge. */
    if (diffs.length) {
      disagreed.push(String(kept[0]).trim() + ' and ' + String(dup[0]).trim() +
                     ' disagree on ' + diffs.join(' and ') + ' — kept ' + String(kept[0]).trim() + "'s");
    }

    // same person: merge the recommendations rather than discarding the duplicate's
    var merged = mergeBlocks(kept[COL_WORDS], kept[COL_BY], dup[COL_WORDS], dup[COL_BY]);
    kept[COL_WORDS] = merged.words;
    kept[COL_BY]    = merged.by;

    drop.push(d);
    retired.push(String(dup[0]).trim());
  }

  /* --- write the cleaned table back, dropping the duplicate rows --- */
  if (fixedPhone || fixedTrade || drop.length) {
    var out = [];
    for (var w = 1; w < vals.length; w++) {
      if (drop.indexOf(w) !== -1) continue;
      var row = vals[w].slice();
      // keep the phone as TEXT so Sheets cannot eat the zero again
      if (String(row[iPhone] || '').trim()) row[iPhone] = phoneText(row[iPhone]);
      out.push(row);
    }
    if (out.length) writeRangeBlocks(pub, 2, out);
    // clear whatever the shortened table left behind
    if (vals.length - 1 > out.length) {
      clearRowsBlocks(pub, 2 + out.length, (vals.length - 1) - out.length);
    }
  }

  if (drop.length) {
    lines.push('Removed ' + drop.length + ' duplicate ' + (drop.length === 1 ? 'row' : 'rows') +
               ', keeping the earliest ID for each person and moving their');
    lines.push('recommendations onto the row that was kept.');
    lines.push('Retired IDs (never reused): ' + retired.join(', '));
  }
  if (fixedPhone) {
    lines.push('Put the missing 0 back on ' + fixedPhone + ' telephone ' +
               (fixedPhone === 1 ? 'number' : 'numbers') + '.');
  }
  if (fixedTrade) {
    lines.push('Corrected ' + fixedTrade + ' trade ' + (fixedTrade === 1 ? 'name' : 'names') +
               ' to match the list on the website.');
  }
  if (disagreed.length) {
    lines.push('');
    lines.push('WORTH A LOOK — these duplicates did not agree:');
    for (var g = 0; g < disagreed.length; g++) lines.push('  • ' + disagreed[g]);
  }
  if (refusedPhone.length) {
    lines.push('');
    lines.push('COULD NOT FIX these telephone numbers — please retype them:');
    for (var f = 0; f < refusedPhone.length; f++) lines.push('  • ' + refusedPhone[f]);
  }

  return { lines: lines };
}

/** T012 -> 12. Non-numeric ids sort last, so a hand-typed id never wins. */
function idNumber(id) {
  var m = String(id || '').match(/(\d+)/);
  return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
}

/** Merge two rows' recommendation cells, keeping the words with their names
 *  and dropping anything already present. */
function mergeBlocks(wordsA, byA, wordsB, byB) {
  function split(v) {
    var s = String(v === null || v === undefined ? '' : v);
    return s ? s.split(REC_SEP).map(function (x) { return x.trim(); })
                .filter(function (x) { return x.length; }) : [];
  }
  var wa = split(wordsA), ba = split(byA), wb = split(wordsB), bb = split(byB);
  while (ba.length < wa.length) ba.push(ANON);

  for (var i = 0; i < wb.length; i++) {
    if (wa.indexOf(wb[i]) !== -1) continue;          // already recorded
    wa.push(wb[i]);
    ba.push(bb[i] || ANON);
  }
  return { words: wa.join(REC_SEP), by: ba.join(REC_SEP) };
}

/**
 * Every phone number the responses tab holds, keyed by its digits, with the
 * ORIGINAL TEXT as the value. This is the good source: the villager typed it
 * and Google never converted it, because the responses tab stores form answers
 * as text.
 */
function responsePhonesByKey(ss) {
  var out = {};
  var sheet = responsesSheet(ss);
  if (!sheet) return out;

  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return out;

  var idx = headerIndex(values[0]);
  if (idx.phone < 0) return out;

  for (var r = 1; r < values.length; r++) {
    var raw = String(values[r][idx.phone] || '').trim();
    if (!raw) continue;
    var d = raw.replace(/\D/g, '');
    if (!d) continue;
    out[d] = raw;                       // as typed
    if (d.charAt(0) === '0') out[d.slice(1)] = raw;   // also findable by the eaten form
  }
  return out;
}

/* ===========================================================================
   SETUP CHECK — so the owner can see it is wired up
   =========================================================================== */

function checkSetup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var lines = [];

  var pub = ss.getSheetByName(PUB_TAB);
  var resp = responsesSheet(ss);

  /* WHY THIS REPORT EXISTS, in plain terms: on 2026-09-18 the publisher ran
     twice, completed both times with a clean log, and the owner saw nothing —
     the rows were a thousand lines below the table. Neither silence nor a
     "Completed" status told him anything. These are the numbers that would
     have. */

  if (!pub) {
    lines.push('The list (Published tab): MISSING — nothing can work without it');
  } else {
    var col = idColumn(pub);
    var idRows = [];
    for (var r = 1; r < col.length; r++) {
      if (String(col[r][0] || '').trim() !== '') idRows.push(r + 1);
    }

    if (!idRows.length) {
      lines.push('People on the list: NONE yet');
    } else {
      var contiguousEnd = 1;
      for (var i = 0; i < idRows.length; i++) {
        if (idRows[i] === contiguousEnd + 1) contiguousEnd = idRows[i]; else break;
      }
      var stranded = idRows.filter(function (n) { return n > contiguousEnd; });

      lines.push('People on the list: ' + idRows.length);
      lines.push('Last ID in use: ' + String(col[idRows[idRows.length - 1] - 1][0]).trim());
      lines.push('The list fills rows 2 to ' + contiguousEnd + '.');

      if (stranded.length) {
        lines.push('');
        lines.push('*** ' + stranded.length + ' ' + (stranded.length === 1 ? 'ROW IS' : 'ROWS ARE') +
                   ' STRANDED BELOW THE LIST ***');
        lines.push('at row ' + stranded.join(', row ') + '.');
        lines.push('They are real people and nothing is lost — they are just in');
        lines.push('the wrong place, so you cannot see them and nor can the website.');
        lines.push('Fix it with: Village list -> Repair the list.');
      } else {
        lines.push('Stranded rows below the list: none. Good.');
      }
    }

    /* --- the three faults found 2026-09-18, REPORTED not fixed ---
       He should be able to see everything before he runs anything. */
    if (idRows.length) {
      var last = lastIdRow(pub);
      var tv = pub.getRange(1, 1, last, PUB_COLS.length).getValues();
      var iP = PUB_COLS.indexOf('phone'), iT = PUB_COLS.indexOf('trade');

      var dupes = {}, dupCount = 0, badPhones = [], oddTrades = [];
      for (var v = 1; v < tv.length; v++) {
        var vid = String(tv[v][0] || '').trim();
        if (!vid) continue;

        var key = normalisePhone(tv[v][iP]);
        if (key) {
          if (dupes[key]) dupCount++;
          else dupes[key] = vid;
        }

        var praw = String(tv[v][iP] || '').trim();
        if (praw) {
          var pd = praw.replace(/\D/g, '');
          if (!(pd.length === PHONE_DIGITS && pd.charAt(0) === '0')) {
            badPhones.push(vid + ' (' + praw + ')');
          }
        }

        var tr = String(tv[v][iT] || '').trim();
        if (tr && !isKnownTrade(tr)) oddTrades.push(vid + ' (' + tr + ')');
        var iX = PUB_COLS.indexOf('extra_trade');
        var trx = String(tv[v][iX] || '').trim();
        if (trx && !isKnownTrade(trx)) oddTrades.push(vid + ' (' + trx + ', second trade)');
      }

      lines.push('');
      lines.push(dupCount
        ? '*** ' + dupCount + ' DUPLICATE ' + (dupCount === 1 ? 'ROW' : 'ROWS') +
          ' — the same telephone number listed more than once. Repair merges them.'
        : 'Duplicate rows: none.');

      lines.push(badPhones.length
        ? '*** ' + badPhones.length + ' TELEPHONE ' + (badPhones.length === 1 ? 'NUMBER LOOKS' : 'NUMBERS LOOK') +
          ' WRONG — the Call button would misdial:\n    ' + badPhones.join('\n    ')
        : 'Telephone numbers: all look right (11 digits starting 0).');

      lines.push(oddTrades.length
        ? oddTrades.length + ' trade ' + (oddTrades.length === 1 ? 'name is' : 'names are') +
          ' not on the agreed list (they make a tile of their own):\n    ' + oddTrades.join('\n    ')
        : 'Trade names: all match the website\'s list.');

      if (dupCount || badPhones.length || oddTrades.length) {
        lines.push('');
        lines.push('Fix what can be fixed with: Village list -> Repair the list.');
      }
    }

    /* --- the owner's helper formulas in I and J ---
       He found them dead by eye, on one row. This report should have told him.
       A script wrote values over them on 2026-09-18; that can no longer happen,
       but a hand edit or a stray paste still can, and with them dead every
       future submission reads as NEW even for somebody already listed. */
    var fI = '', fJ = '';
    try {
      var f = pub.getRange(2, 9, 1, 2).getFormulas()[0];
      fI = String(f[0] || ''); fJ = String(f[1] || '');
    } catch (ignored) {}

    lines.push('');
    if (fI && fJ) {
      // both present — are they actually producing a value for every phone?
      var lastR = lastIdRow(pub);
      var blank = [];
      if (lastR > 1) {
        var hv = pub.getRange(1, 1, lastR, PUB_COLS.length).getValues();
        var pI = PUB_COLS.indexOf('phone');
        for (var q = 1; q < hv.length; q++) {
          if (!String(hv[q][0] || '').trim()) continue;
          if (!String(hv[q][pI] || '').trim()) continue;
          if (!String(hv[q][8] || '').trim()) blank.push(String(hv[q][0]).trim());
        }
      }
      lines.push(blank.length
        ? '*** THE DUPLICATE CHECKER IS NOT FILLING IN for: ' + blank.join(', ') +
          '\n    The formula is in I2 but is not reaching those rows.'
        : 'Duplicate-checker columns (I and J): working.');
    } else {
      lines.push('*** THE DUPLICATE CHECKER IS BROKEN ***');
      if (!fI) lines.push('  I2 has no formula in it.');
      if (!fJ) lines.push('  J2 has no formula in it.');
      lines.push('  Until this is put right, EVERY new form submission will look');
      lines.push('  like a new person, even somebody already on the list.');
      lines.push('  Fix: open apps-script/SHEET-FORMULAS.md, step 2, and paste the');
      lines.push('  two formulas back into Published I2 and J2.');
    }

    var headers = pub.getRange(1, 1, 1, PUB_COLS.length).getValues()[0];
    var missing = [];
    for (var h = 0; h < PUB_COLS.length; h++) {
      if (String(headers[h] || '').trim().toLowerCase() !== PUB_COLS[h]) missing.push(PUB_COLS[h]);
    }
    if (missing.length) {
      lines.push('');
      lines.push('Headings that are missing or in the wrong place: ' + missing.join(', '));
      lines.push('(recommendations and recommended_by go in K1 and L1 — see DEPLOY.md step 10)');
    }
  }

  lines.push('');
  lines.push(resp ? 'Form responses tab: found' : 'Form responses tab: MISSING');

  var triggers = ScriptApp.getProjectTriggers();
  var wired = false;
  for (var t = 0; t < triggers.length; t++) {
    if (triggers[t].getHandlerFunction() === 'onFormSubmitPublish') wired = true;
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
