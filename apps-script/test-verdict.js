/* The Form responses `verdict` column, tested as logic.
 *
 * ============================================================================
 * READ THIS BEFORE CHANGING THE HARNESS OR THE FORMULA
 *
 * This file has been wrong twice, and both times it was wrong in the SAME way:
 * it modelled Google Sheets as more capable than Google Sheets is, so the test
 * agreed with the code and the two were wrong together. Each time the owner
 * found the defect by looking at his screen, and this suite found neither.
 *
 *   2026-09-19 (first) — the suite evaluated one row at a time. A self-match is
 *   invisible row-by-row, so twelve passing cases missed a formula that matched
 *   every row against itself.
 *
 *   2026-09-19 (second) — the suite modelled INDEX and MATCH as vectorising
 *   inside ARRAYFORMULA. INDEX does not. The shipped formula therefore stamped
 *   ONE id on every row, and the harness happily confirmed it was correct.
 *
 * THE RULE THIS FILE NOW FOLLOWS: the model of a platform function may only be
 * made MORE permissive on documented evidence, never on convenience. Where a
 * function is known not to vectorise, it is modelled as not vectorising even
 * though that makes the formula harder to write. See ARRAY_SEMANTICS below.
 * ============================================================================
 *
 * HOW TO RUN:  node apps-script/test-verdict.js
 * No dependencies. The site has no build step and no node_modules.
 */

'use strict';

/* ===========================================================================
   ARRAY SEMANTICS — established from Google's documentation and from published
   analysis on 2026-09-19, NOT from this file's convenience.

   VECTORISE inside ARRAYFORMULA (one evaluation per row):
     COUNTIF(range, criterion)  — the criterion is lifted.
     MATCH(search_key, ...)     — the search key IS lifted; it correctly returns
                                  an ARRAY of positions, one per row.
     VLOOKUP(search_key, ...)   — the search key IS lifted and spills per row.
     IF, LEN, TRIM, LOWER, REGEXMATCH, REGEXREPLACE, LEFT, MID, TO_TEXT.

   DO NOT VECTORISE:
     INDEX(range, position)     — INDEX is not array-aware over its POSITION
                                  argument. Handed an array of positions it
                                  reads only the FIRST and ignores the rest.
                                  ARRAYFORMULA cannot fix it: the limitation is
                                  inside INDEX.

   SO THE CULPRIT IS INDEX, NOT MATCH. That matters for the fix: MATCH may stay,
   INDEX must go. It also corrects a sentence written earlier the same day —
   "MATCH is not an array-aware function in Sheets" — which was simply wrong.
   =========================================================================== */

const TO_TEXT      = v => (v === null || v === undefined) ? '' : String(v);
const REGEXREPLACE = (s, re, rep) => TO_TEXT(s).replace(new RegExp(re, 'g'), rep);
const REGEXMATCH   = (s, re) => new RegExp(re).test(TO_TEXT(s));
const LEFT  = (s, n) => TO_TEXT(s).slice(0, n);
const MID   = (s, start, len) => TO_TEXT(s).substr(start - 1, len);
const LOWER = s => TO_TEXT(s).toLowerCase();
const TRIM  = s => TO_TEXT(s).trim();
const LEN   = s => TO_TEXT(s).length;

/** COUNTIF(range, criterion) — VECTORISING. An empty-string criterion matches
 *  empty cells, which is why the key is guarded and the range bounded. */
function COUNTIF(range, criterion) {
  const c = TO_TEXT(criterion);
  let n = 0;
  for (const cell of range) if (TO_TEXT(cell) === c) n++;
  return n;
}

/** MATCH(key, range, 0) — VECTORISING over search_key. Exact, 1-based, or #N/A. */
function MATCH(key, range) {
  const k = TO_TEXT(key);
  for (let i = 0; i < range.length; i++) if (TO_TEXT(range[i]) === k) return i + 1;
  return { NA: true };
}

/** VLOOKUP(key, table, colIndex, FALSE) — VECTORISING over search_key.
 *  `table` is a list of rows; column 1 is searched, colIndex is returned. */
function VLOOKUP(key, table, colIndex) {
  const k = TO_TEXT(key);
  for (const row of table) if (TO_TEXT(row[0]) === k) return TO_TEXT(row[colIndex - 1]);
  return { NA: true };
}

/** A literal array {colA, colB} — a virtual table built from parallel columns.
 *  This is how a LEFT lookup is done: put the key column first. */
function LITERAL(...cols) {
  return cols[0].map((_, r) => cols.map(c => c[r]));
}

const IFERROR = (v, alt) => (v && v.NA) ? alt : v;

/* ===========================================================================
   THE KEY EXPRESSIONS, shared by every formula version
   =========================================================================== */

function phoneKey(v) {
  const d = REGEXREPLACE(TO_TEXT(v), '\\D', '');
  if (d === '') return '';
  if (LEFT(d, 4) === '0044') return '0' + MID(d, 5, 50);
  if (LEFT(d, 2) === '44')   return '0' + MID(d, 3, 50);
  return d;
}

function nameKey(first, last) {
  return LOWER(REGEXREPLACE(TO_TEXT(first) + TO_TEXT(last), '[^A-Za-z0-9]', ''));
}

function checkFlag(row) {
  return REGEXMATCH(LOWER(TRIM(TO_TEXT(row.E))), '^not ?known$')
      || REGEXMATCH(LOWER(TRIM(TO_TEXT(row.G))), '^not ?known$')
      || LEN(TRIM(TO_TEXT(row.H))) < 7;
}

/* ===========================================================================
   VERSION 1 — THE ORIGINAL, which matched every row against itself.
   Kept as a negative control for the FIRST defect.
   =========================================================================== */
function verdictV1_selfMatch(rowIdx, sheet) {
  const row = sheet.rows[rowIdx];
  if (TO_TEXT(row.F) === '') return '';
  if (checkFlag(row)) return 'CHECK THIS';

  const pk     = phoneKey(row.F);
  const ownCol = sheet.rows.map(r => phoneKey(r.F));
  const ownNm  = sheet.rows.map(r => nameKey(r.D, r.E));

  if (COUNTIF(ownCol, pk) > 0) {
    const m = MATCH(pk, ownCol);
    return 'ALREADY ON SITE — row ' + (m.NA ? '' : m + 1);
  }
  if (COUNTIF(ownNm, nameKey(row.D, row.E)) > 0) return 'SAME NAME, DIFFERENT NUMBER';
  return 'NEW';
}

/* ===========================================================================
   VERSION 2 — THE ONE CURRENTLY IN THE OWNER'S SHEET. Negative control for the
   SECOND defect, and the reason this harness was rewritten.

   It uses INDEX(Published!A, MATCH(pk, Published!I, 0)). MATCH vectorises and
   hands INDEX an array of positions, one per row — and INDEX reads only the
   FIRST and broadcasts that single id down the whole column.

   Modelled here EXACTLY that way. `firstPosition` is taken from the first row
   of the column that produces a hit, and every hitting row prints the id at
   that position. That reproduces what the owner photographed: about twelve
   consecutive rows all reading `ALREADY ON SITE — T005`.
   =========================================================================== */
function verdictV2_constantId(sheet) {
  /* INDEX is evaluated ONCE for the whole column, so this cannot be computed
     row-by-row. The signature differs from the others on purpose: a function
     that does not vectorise cannot honestly be modelled as if it did. */
  const positions = sheet.rows.map(row => {
    const pk = phoneKey(row.F);
    if (TO_TEXT(row.F) === '' || checkFlag(row) || pk === '') return null;
    return COUNTIF(sheet.pubI, pk) > 0 ? MATCH(pk, sheet.pubI) : null;
  });

  // INDEX takes the FIRST element of the position array and ignores the rest.
  const firstPos = positions.find(p => p !== null && !p.NA);
  const broadcastId = firstPos === undefined ? '?' : TO_TEXT(sheet.pubA[firstPos - 1]);

  return sheet.rows.map((row, i) => {
    if (TO_TEXT(row.F) === '') return '';
    if (checkFlag(row)) return 'CHECK THIS';
    const pk = phoneKey(row.F);
    if (pk === '') return 'CHECK THIS';
    // COUNTIF DOES vectorise, so the branch chosen is correct per row...
    if (COUNTIF(sheet.pubI, pk) > 0) {
      // ...but the id printed is the same constant on every row.
      return 'ALREADY ON SITE — ' + broadcastId;
    }
    const nk = nameKey(row.D, row.E);
    if (nk !== '' && COUNTIF(sheet.pubJ, nk) > 0) return 'SAME NAME, DIFFERENT NUMBER';
    return 'NEW';
  });
}

/* ===========================================================================
   VERSION 3 — THE FIX. Mirrors the LET() formula in SHEET-FORMULAS.md.

   The ONLY change from version 2 is the id lookup. Branch logic, precedence,
   the seven-character rule and every CHECK THIS case are byte-for-byte the
   same, because the owner's screenshot confirms all of those are correct and
   they must not be disturbed.

   INDEX/MATCH is replaced by VLOOKUP over a LITERAL ARRAY. Published's id is
   in column A and the phone key in column I, so this is a LEFT lookup, which
   VLOOKUP cannot do directly. The curly-brace literal builds a virtual
   two-column table with the key column first:

       VLOOKUP(pk, {Published!$I$2:$I$500, Published!$A$2:$A$500}, 2, FALSE)

   VLOOKUP is array-aware over its search key, so this evaluates once per row.
   =========================================================================== */
function verdictV3_fixed(rowIdx, sheet) {
  const row = sheet.rows[rowIdx];
  if (TO_TEXT(row.F) === '') return '';

  const pk = phoneKey(row.F);
  const nk = nameKey(row.D, row.E);

  if (checkFlag(row)) return 'CHECK THIS';
  if (pk === '') return 'CHECK THIS';

  if (COUNTIF(sheet.pubI, pk) > 0) {
    // The virtual table: key column first, id column second.
    const table = LITERAL(sheet.pubI, sheet.pubA);
    const id = IFERROR(VLOOKUP(pk, table, 2), '?');
    return 'ALREADY ON SITE — ' + id;
  }

  if (nk !== '' && COUNTIF(sheet.pubJ, nk) > 0) return 'SAME NAME, DIFFERENT NUMBER';
  return 'NEW';
}

/* ===========================================================================
   VERSION 4 — THE ALTERNATIVE CONSIDERED: no id at all.
   Immune to this whole class of defect because it looks nothing up.
   Tested so the recommendation in the summary rests on a comparison.
   =========================================================================== */
function verdictV4_noId(rowIdx, sheet) {
  const row = sheet.rows[rowIdx];
  if (TO_TEXT(row.F) === '') return '';
  const pk = phoneKey(row.F);
  const nk = nameKey(row.D, row.E);
  if (checkFlag(row)) return 'CHECK THIS';
  if (pk === '') return 'CHECK THIS';
  if (COUNTIF(sheet.pubI, pk) > 0) return 'ALREADY ON SITE';
  if (nk !== '' && COUNTIF(sheet.pubJ, nk) > 0) return 'SAME NAME, DIFFERENT NUMBER';
  return 'NEW';
}

/* ===========================================================================
   FIXTURES — the owner's REAL Published tab, from the live CSV 2026-09-19.
   =========================================================================== */

const PUBLISHED_REAL = [
  ['T001', 'Duckers', 'Plumber',    '07825 736940', 'active'],
  ['T002', 'Test',    'Sparky',     '07700 900456', 'active'],
  ['T003', 'Another', 'Roofer',     '01392 123456', 'active'],
  ['T004', 'Hidden',  'Person',     '07700 900999', 'hidden'],
  ['T005', 'Bob',     'Samwell',    '07887988959',  'active'],
  ['T006', 'Ben',     'Franks',     '07887800192',  'active'],
  ['T007', 'Helen',   'Smith',      '07885333543',  'active'],
  ['T008', 'Test',    'One',        '07999000111',  'active'],
  ['T009', 'Duckers', 'Plumber',    '07999 222333', 'active'],
  ['T010', 'Test',    'Four',       '07999 444555', 'active'],
  ['T011', 'John',    'Pilkington', '07887800192',  'active'],
  ['T012', 'Frank',   'Shelly',     '07111655432',  'active'],
  ['T013', 'Ron',     'Suttil',     '07885322543',  'active'],
  ['T014', 'Test',    'Nine',       '07999 888777', 'active'],
  ['T015', 'Bob',     'Samwell',    '07999 111222', 'active'],
];

/** Google's default sheet height. The owner's helper columns are ARRAYFORMULA
 *  over whole columns, so they fill every one of these rows with "". The
 *  fixture must reproduce that or it cannot detect the empty-match fault. */
const SHEET_ROWS = 1000;

function buildSheet(published, formRows) {
  const pubA = [], pubI = [], pubJ = [];
  for (let r = 0; r < SHEET_ROWS - 1; r++) {
    const p = published[r];
    pubA.push(p ? p[0] : '');
    pubI.push(p ? phoneKey(p[3]) : '');
    pubJ.push(p ? nameKey(p[1], p[2]) : '');
  }
  return { rows: formRows, pubA, pubI, pubJ };
}

/** The owner's Form responses tab: earlier real responses, then his two test
 *  rows at sheet rows 15 and 16. Rows 2-14 are given numbers that ARE on
 *  Published, because in reality every response has published itself — which
 *  is what produced twelve consecutive ALREADY ON SITE rows in his screenshot. */
function formResponsesReal() {
  const rows = [];
  const realPeople = PUBLISHED_REAL.slice(0, 13);
  realPeople.forEach((p, i) => {
    rows.push({
      sheetRow: 2 + i, C: 'Plumber',
      D: p[1], E: p[2], F: p[3],
      G: '', H: 'They did a good job here', I: 'Helen'
    });
  });
  rows.push({ sheetRow: 15, C: 'Plumber', D: 'Test', E: 'Nine',
              F: '07999 888777', G: '', H: 'Did a proper job on the boiler', I: 'Gavin' });
  rows.push({ sheetRow: 16, C: 'Plumber', D: 'Bob', E: 'Samwell',
              F: '07999 111222', G: '', H: 'Came out on a Sunday evening', I: 'Gavin' });
  return rows;
}

/** Evaluate a whole column at once, as ARRAYFORMULA does. */
function evaluateColumn(sheet, fn) {
  return sheet.rows.map((_, i) => fn(i, sheet));
}
const atRow = (sheet, results, n) => results[sheet.rows.findIndex(r => r.sheetRow === n)];

/* ===========================================================================
   THE SUITE
   =========================================================================== */

let pass = 0, fail = 0;
function check(label, cond, detail) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label + (detail ? '  — ' + detail : '')); }
}
function section(t) { console.log('\n=== ' + t + ' ==='); }

/* --------------------------------------------------------------------------
   1. NEGATIVE CONTROL A — the version IN THE OWNER'S SHEET RIGHT NOW must fail.

   This is the test that did not exist an hour ago, and its absence is why a
   broken formula shipped. It asserts the deployed formula reproduces what he
   photographed: one id stamped on every hitting row.
   -------------------------------------------------------------------------- */
section('1. NEGATIVE CONTROL — the DEPLOYED formula (INDEX/MATCH) reproduces the screenshot');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out = verdictV2_constantId(sheet);

  const already = out.filter(v => v.startsWith('ALREADY ON SITE'));
  const ids = [...new Set(already.map(v => v.replace('ALREADY ON SITE — ', '')))];
  console.log(`    ${already.length} rows read ALREADY ON SITE, printing ${ids.length} distinct id(s): ${ids.join(', ')}`);
  console.log('    row 15 →', JSON.stringify(atRow(sheet, out, 15)));
  console.log('    row 16 →', JSON.stringify(atRow(sheet, out, 16)));

  check('deployed: many rows read ALREADY ON SITE', already.length >= 12, String(already.length));
  check('deployed: they ALL print the SAME id — the defect', ids.length === 1, ids.join(','));
  check('deployed: row 15 does NOT read T014 (it is wrong)',
        atRow(sheet, out, 15) !== 'ALREADY ON SITE — T014', atRow(sheet, out, 15));
  check('deployed: row 16 does NOT read T015 (it is wrong)',
        atRow(sheet, out, 16) !== 'ALREADY ON SITE — T015', atRow(sheet, out, 16));

  /* The property from task 5, shown VIOLATED by the deployed version. */
  const violated = ids.length === 1 && already.length > 1;
  check('deployed: VIOLATES "different people must not share an id"', violated);
}

/* --------------------------------------------------------------------------
   2. NEGATIVE CONTROL B — the original self-matching version still fails too.
   -------------------------------------------------------------------------- */
section('2. NEGATIVE CONTROL — the ORIGINAL formula still reproduces the self-match');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out = evaluateColumn(sheet, verdictV1_selfMatch);

  /* Every row self-matches, because the original searched this tab's own key
     column. What it PRINTS is that row's position in the response column + 1.

     Note this is NOT always the sheet row number in the present fixture: rows
     2-14 now carry the owner's real published numbers, and T006/T011 share a
     number, so two responses collide on one position. That collision is itself
     a property of the defect rather than a flaw in the fixture, so the
     assertion checks the mechanism (a self-derived position) rather than a
     coincidence of arithmetic that only held with the earlier fixture. */
  const ownCol = sheet.rows.map(r => phoneKey(r.F));
  const expected = sheet.rows.map((r, i) => {
    if (checkFlag(r)) return 'CHECK THIS';
    return 'ALREADY ON SITE — row ' + (MATCH(phoneKey(r.F), ownCol) + 1);
  });
  check('original: every row prints a position derived from ITS OWN column',
        out.every((v, i) => v === expected[i]),
        out.slice(0, 3).join(' | '));
  check('original: prints a ROW NUMBER, never an id',
        out.every(v => !/T\d\d\d/.test(v)));
  check('original: at least one row names its own sheet row',
        out.some((v, i) => v === 'ALREADY ON SITE — row ' + sheet.rows[i].sheetRow));
}

/* --------------------------------------------------------------------------
   3. THE FIX — the id is looked up PER ROW.
   -------------------------------------------------------------------------- */
section('3. THE FIX — VLOOKUP over a literal array, evaluated per row');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out = evaluateColumn(sheet, verdictV3_fixed);
  const r15 = atRow(sheet, out, 15), r16 = atRow(sheet, out, 16);
  console.log('    row 15 →', JSON.stringify(r15));
  console.log('    row 16 →', JSON.stringify(r16));

  check('fixed: row 15 reads ALREADY ON SITE — T014', r15 === 'ALREADY ON SITE — T014', r15);
  check('fixed: row 16 reads ALREADY ON SITE — T015', r16 === 'ALREADY ON SITE — T015', r16);
  check('fixed: no verdict contains a row number', out.every(v => !/ row \d/.test(v)));

  const already = out.filter(v => v.startsWith('ALREADY ON SITE'));
  const ids = [...new Set(already.map(v => v.replace('ALREADY ON SITE — ', '')))];
  console.log(`    ${already.length} rows read ALREADY ON SITE, printing ${ids.length} distinct ids`);
  check('fixed: MORE THAN ONE distinct id is printed', ids.length > 1, ids.join(','));
}

/* --------------------------------------------------------------------------
   4. TASK 5 — THE PROPERTY, as its own test.

   No two response rows may print the same id unless they genuinely name the
   same published person. Checked by deriving the expected id independently,
   from the fixture, rather than from the formula under test.
   -------------------------------------------------------------------------- */
section('4. THE PROPERTY — two rows share an id ONLY if they name the same person');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out = evaluateColumn(sheet, verdictV3_fixed);

  // Independently: which published person does each response actually name?
  const expected = sheet.rows.map(row => {
    const pk = phoneKey(row.F);
    if (checkFlag(row) || pk === '') return null;
    const hit = PUBLISHED_REAL.find(p => phoneKey(p[3]) === pk);
    return hit ? hit[0] : null;
  });

  let ok = true;
  const byId = {};
  out.forEach((v, i) => {
    if (!v.startsWith('ALREADY ON SITE')) return;
    const printed = v.replace('ALREADY ON SITE — ', '');
    (byId[printed] = byId[printed] || []).push(i);
    if (printed !== expected[i]) {
      ok = false;
      console.log(`     row ${sheet.rows[i].sheetRow}: printed ${printed}, should be ${expected[i]}`);
    }
  });
  check('every printed id is the id of the person that row actually names', ok);

  // And where an id IS shared, the rows must genuinely name the same person.
  let sharedOk = true;
  Object.entries(byId).forEach(([id, idxs]) => {
    if (idxs.length > 1) {
      const keys = [...new Set(idxs.map(i => phoneKey(sheet.rows[i].F)))];
      if (keys.length > 1) {
        sharedOk = false;
        console.log(`     id ${id} printed for ${keys.length} DIFFERENT numbers: ${keys.join(', ')}`);
      }
    }
  });
  check('where an id is shared, the rows carry the SAME phone number', sharedOk);

  // The same property, run against the deployed version — must FAIL there.
  const bad = verdictV2_constantId(sheet);
  let badViolates = false;
  const badById = {};
  bad.forEach((v, i) => {
    if (!v.startsWith('ALREADY ON SITE')) return;
    const printed = v.replace('ALREADY ON SITE — ', '');
    (badById[printed] = badById[printed] || []).push(phoneKey(sheet.rows[i].F));
  });
  Object.values(badById).forEach(keys => {
    if ([...new Set(keys)].length > 1) badViolates = true;
  });
  check('the DEPLOYED version violates this property (so the test can detect it)', badViolates);
}

/* --------------------------------------------------------------------------
   5. ALL FOUR VERDICTS — unchanged behaviour must stay unchanged.
   -------------------------------------------------------------------------- */
section('5. ALL FOUR VERDICTS — the branch logic the screenshot confirmed correct');
{
  const cases = [
    { label: 'NEW — unknown number and unknown name',
      row: { sheetRow: 20, D: 'Wendy', E: 'Fieldgate', F: '07700 900321', G: '',
             H: 'Rehung the front gate properly' }, want: 'NEW' },
    { label: 'ALREADY ON SITE — T001 by number',
      row: { sheetRow: 21, D: 'Duckers', E: 'Plumber', F: '07825 736940', G: '',
             H: 'Sorted the leak in the kitchen' }, want: 'ALREADY ON SITE — T001' },
    { label: 'ALREADY ON SITE — the +44 form still matches T001',
      row: { sheetRow: 22, D: 'Duckers', E: 'Plumber', F: '+44 7825 736940', G: '',
             H: 'Sorted the leak in the kitchen' }, want: 'ALREADY ON SITE — T001' },
    { label: 'ALREADY ON SITE — a DIFFERENT person, T013',
      row: { sheetRow: 23, D: 'Ron', E: 'Suttil', F: '07885322543', G: '',
             H: 'Very good with metal work' }, want: 'ALREADY ON SITE — T013' },
    { label: 'SAME NAME, DIFFERENT NUMBER — T001 name, unused number',
      row: { sheetRow: 24, D: 'Duckers', E: 'Plumber', F: '07700 900123', G: '',
             H: 'Came out on a Sunday evening' }, want: 'SAME NAME, DIFFERENT NUMBER' },
    { label: 'CHECK THIS — text under seven characters',
      row: { sheetRow: 25, D: 'Wendy', E: 'Fieldgate', F: '07700 900322', G: '',
             H: 'quick' }, want: 'CHECK THIS' },
    { label: 'CHECK THIS — last name "Not Known"',
      row: { sheetRow: 26, D: 'Wendy', E: 'Not Known', F: '07700 900324', G: '',
             H: 'Rehung the front gate properly' }, want: 'CHECK THIS' },
    { label: 'CHECK THIS — business "not known"',
      row: { sheetRow: 27, D: 'Wendy', E: 'Fieldgate', F: '07700 900325',
             G: 'not known', H: 'Rehung the front gate properly' }, want: 'CHECK THIS' },
    { label: 'CHECK THIS beats ALREADY ON SITE (precedence)',
      row: { sheetRow: 28, D: 'Duckers', E: 'Plumber', F: '07825 736940', G: '',
             H: 'quick' }, want: 'CHECK THIS' },
    { label: 'seven characters accepted',
      row: { sheetRow: 29, D: 'Wendy', E: 'Fieldgate', F: '07700 900326', G: '',
             H: 'Fixed g' }, want: 'NEW' },
    { label: 'the owner\'s own "Fixed gate" accepted',
      row: { sheetRow: 30, D: 'Wendy', E: 'Fieldgate', F: '07700 900327', G: '',
             H: 'Fixed gate' }, want: 'NEW' },
    { label: 'blank experience → CHECK THIS (deliberate rule)',
      row: { sheetRow: 31, D: 'Wendy', E: 'Fieldgate', F: '07700 900328', G: '', H: '' },
      want: 'CHECK THIS' },
    { label: 'full name in the first-name box still matches',
      row: { sheetRow: 32, D: 'Duckers Plumber', E: '', F: '07700 900329', G: '',
             H: 'Sorted the leak in the kitchen' }, want: 'SAME NAME, DIFFERENT NUMBER' },
    { label: 'capitals, spaces and punctuation ignored in names',
      row: { sheetRow: 33, D: '  bob ', E: 'SAM-WELL', F: '07700 900330', G: '',
             H: 'Came out on a Sunday evening' }, want: 'SAME NAME, DIFFERENT NUMBER' },
    { label: 'a HIDDEN person still counts as already on site (T004)',
      row: { sheetRow: 34, D: 'Hidden', E: 'Person', F: '07700 900999', G: '',
             H: 'They did a good job here' }, want: 'ALREADY ON SITE — T004' },
    { label: 'unusable phone → CHECK THIS, never ALREADY ON SITE',
      row: { sheetRow: 35, D: 'Wendy', E: 'Fieldgate', F: 'ring the bell', G: '',
             H: 'Rehung the front gate properly' }, want: 'CHECK THIS' },
  ];

  const sheet = buildSheet(PUBLISHED_REAL, cases.map(c => c.row));
  const out = evaluateColumn(sheet, verdictV3_fixed);
  cases.forEach((c, i) => check(`${c.label}  →  ${JSON.stringify(out[i])}`,
                                out[i] === c.want, `wanted ${JSON.stringify(c.want)}`));

  const seen = new Set(out.map(v => v.split(' — ')[0]));
  check('all four verdict kinds produced',
        ['NEW', 'ALREADY ON SITE', 'SAME NAME, DIFFERENT NUMBER', 'CHECK THIS']
          .every(v => seen.has(v)), [...seen].join(' | '));

  /* Three DIFFERENT people are named in this fixture — the direct refutation
     of a broadcast constant. */
  const ids = [...new Set(out.filter(v => v.startsWith('ALREADY ON SITE'))
                             .map(v => v.replace('ALREADY ON SITE — ', '')))].sort();
  check('three distinct ids printed: T001, T004, T013',
        ids.join(',') === 'T001,T004,T013', ids.join(','));
}

/* --------------------------------------------------------------------------
   6. THE EMPTY-KEY TRAP — still guarded.
   -------------------------------------------------------------------------- */
section('6. THE EMPTY-KEY TRAP');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  check('fixture reproduces the trap: hundreds of empty helper cells',
        sheet.pubI.filter(x => x === '').length > 900,
        String(sheet.pubI.filter(x => x === '').length));
  check('COUNTIF would match all of them on an empty key',
        COUNTIF(sheet.pubI, '') > 900);
  const junk = buildSheet(PUBLISHED_REAL, [
    { sheetRow: 40, D: 'Wendy', E: 'Fieldgate', F: 'ring the bell', G: '',
      H: 'Rehung the front gate properly' }]);
  check('fixed: an unusable phone gives CHECK THIS',
        evaluateColumn(junk, verdictV3_fixed)[0] === 'CHECK THIS');
}

/* --------------------------------------------------------------------------
   7. NOBODY IS MISSED — every published person found by their own number.
   -------------------------------------------------------------------------- */
section('7. EVERY PUBLISHED PERSON IS FOUND BY THEIR OWN NUMBER');
{
  const rows = PUBLISHED_REAL.map((p, i) => ({
    sheetRow: 100 + i, D: p[1], E: p[2], F: p[3], G: '',
    H: 'They did a good job here' }));
  const sheet = buildSheet(PUBLISHED_REAL, rows);
  const out = evaluateColumn(sheet, verdictV3_fixed);
  let allFound = true;
  out.forEach((v, i) => {
    const firstWithKey = PUBLISHED_REAL.find(
      p => phoneKey(p[3]) === phoneKey(PUBLISHED_REAL[i][3]))[0];
    if (v !== 'ALREADY ON SITE — ' + firstWithKey) {
      allFound = false;
      console.log(`     ${PUBLISHED_REAL[i][0]} → ${v}`);
    }
  });
  check('all 15 published people found by their own number', allFound);
  check('shared number 07887800192 resolves to the FIRST holder, T006',
        out[PUBLISHED_REAL.findIndex(p => p[0] === 'T011')] === 'ALREADY ON SITE — T006',
        out[PUBLISHED_REAL.findIndex(p => p[0] === 'T011')]);

  const distinct = new Set(out.map(v => v.replace('ALREADY ON SITE — ', '')));
  check('14 distinct ids printed across 15 rows (two share a number)',
        distinct.size === 14, String(distinct.size));
}

/* --------------------------------------------------------------------------
   8. THE ALTERNATIVE — a verdict with no id cannot print a wrong one.
   Recorded so the recommendation rests on a comparison, not a preference.
   -------------------------------------------------------------------------- */
section('8. THE ALTERNATIVE CONSIDERED — plain ALREADY ON SITE with no id');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out = evaluateColumn(sheet, verdictV4_noId);
  check('no-id version: never prints an id, so it cannot print a wrong one',
        out.every(v => !/T\d/.test(v)));
  check('no-id version: branch selection is identical to the fix',
        out.every((v, i) => v.split(' — ')[0] ===
                  evaluateColumn(sheet, verdictV3_fixed)[i].split(' — ')[0]));
}

/* --------------------------------------------------------------------------
   9. THE HARNESS ITSELF — assert the model is the STRICT one.
   If someone later makes INDEX vectorise "to make the tests pass", this fails.
   -------------------------------------------------------------------------- */
section('9. THE HARNESS MODELS THE PLATFORM STRICTLY');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const v2 = verdictV2_constantId(sheet);
  const v3 = evaluateColumn(sheet, verdictV3_fixed);
  let differ = 0;
  v2.forEach((v, i) => { if (v !== v3[i]) differ++; });
  console.log(`    deployed vs fixed: ${differ} of ${v2.length} rows differ`);
  check('the fix changes rows the deployed version got wrong', differ > 0);
  check('the deployed model is NOT simply the fixed model renamed',
        verdictV2_constantId.length !== verdictV3_fixed.length,
        'V2 takes the whole sheet because INDEX cannot be evaluated per row');
}

console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
process.exit(fail === 0 ? 0 : 1);
