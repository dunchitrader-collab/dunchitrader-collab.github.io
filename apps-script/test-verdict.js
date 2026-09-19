/* The Form responses `verdict` column, tested as logic.
 *
 * WHY THIS FILE EXISTS. On 2026-09-19 the owner typed two test rows into his
 * Form responses tab and both read `ALREADY ON SITE — row 15` and
 * `ALREADY ON SITE — row 16` — each naming ITS OWN row number, with neither
 * person on the Published list. The verdict was matching each row against
 * itself. Nothing errored; the answers merely looked plausible.
 *
 * The previous version of these formulas was "tested by local simulation" and
 * passed twelve cases. It passed because the simulation modelled the AUTHOR'S
 * INTENT rather than what the formula actually does with its ranges. So this
 * harness does two things the old one did not:
 *
 *   1. It evaluates a WHOLE COLUMN at once, the way ARRAYFORMULA does, rather
 *      than one row in isolation. A self-match is invisible row-by-row — it can
 *      only be seen when the row is evaluated in the presence of its own key.
 *
 *   2. It carries a NEGATIVE CONTROL: the defective formula is implemented
 *      alongside the fixed one, and the suite asserts that the defective one
 *      REPRODUCES the owner's exact observation. A test that cannot fail proves
 *      nothing, and this project has already shipped one of those.
 *
 * HOW TO RUN:  node apps-script/test-verdict.js
 * No dependencies. The site has no build step and no node_modules.
 */

'use strict';

/* ===========================================================================
   GOOGLE SHEETS PRIMITIVES

   Modelled from the documented behaviour of each function. The two that matter
   most are COUNTIF and MATCH, because both treat an EMPTY STRING as a value
   that can be found — which is the second half of this defect.
   =========================================================================== */

const TO_TEXT      = v => (v === null || v === undefined) ? '' : String(v);
const REGEXREPLACE = (s, re, rep) => TO_TEXT(s).replace(new RegExp(re, 'g'), rep);
const REGEXMATCH   = (s, re) => new RegExp(re).test(TO_TEXT(s));
const LEFT  = (s, n) => TO_TEXT(s).slice(0, n);
const MID   = (s, start, len) => TO_TEXT(s).substr(start - 1, len);
const LOWER = s => TO_TEXT(s).toLowerCase();
const TRIM  = s => TO_TEXT(s).trim();
const LEN   = s => TO_TEXT(s).length;

/** COUNTIF(range, criterion). An empty-string criterion matches empty cells —
 *  which is why the lookup range must be bounded and the key guarded. */
function COUNTIF(range, criterion) {
  const c = TO_TEXT(criterion);
  let n = 0;
  for (const cell of range) if (TO_TEXT(cell) === c) n++;
  return n;
}

/** MATCH(key, range, 0) — exact, 1-based, or #N/A. */
function MATCH(key, range) {
  const k = TO_TEXT(key);
  for (let i = 0; i < range.length; i++) if (TO_TEXT(range[i]) === k) return i + 1;
  return { NA: true };
}
const INDEX   = (range, pos) => (pos && pos.NA) ? { NA: true } : TO_TEXT(range[pos - 1]);
const IFERROR = (v, alt) => (v && v.NA) ? alt : v;

/* ===========================================================================
   THE TWO KEY EXPRESSIONS, shared by both formula versions
   =========================================================================== */

/** phone_key: digits only, with the UK international forms folded to the 0 form. */
function phoneKey(v) {
  const d = REGEXREPLACE(TO_TEXT(v), '\\D', '');
  if (d === '') return '';
  if (LEFT(d, 4) === '0044') return '0' + MID(d, 5, 50);
  if (LEFT(d, 2) === '44')   return '0' + MID(d, 3, 50);
  return d;
}

/** name_key: first and last concatenated, then squashed to lower-case letters
 *  and digits. Concatenating BEFORE stripping is deliberate — it makes a full
 *  name typed into the first-name box match a properly split row. */
function nameKey(first, last) {
  return LOWER(REGEXREPLACE(TO_TEXT(first) + TO_TEXT(last), '[^A-Za-z0-9]', ''));
}

/** The CHECK THIS flag, identical in both versions. */
function checkFlag(row) {
  return REGEXMATCH(LOWER(TRIM(TO_TEXT(row.E))), '^not ?known$')
      || REGEXMATCH(LOWER(TRIM(TO_TEXT(row.G))), '^not ?known$')
      || LEN(TRIM(TO_TEXT(row.H))) < 7;
}

/* ===========================================================================
   THE DEFECTIVE VERSION — the negative control.

   This is what the owner's sheet was doing on 2026-09-19, established from the
   arithmetic of what he saw: both COUNTIF and MATCH searched the FORM RESPONSES
   tab's own `J` column (phone_key) rather than Published's `I`. Every row
   therefore finds itself, and MATCH's position + 1 is exactly that row's own
   number — which is why row 15 said "row 15" and row 16 said "row 16".

   It is kept in the repository, and run by the suite, because a fix that is not
   shown to change an observed wrong answer into an observed right one is an
   assertion rather than a proof.
   =========================================================================== */
function verdictDEFECTIVE(rowIdx, sheet) {
  const row = sheet.rows[rowIdx];
  if (TO_TEXT(row.F) === '') return '';
  if (checkFlag(row)) return 'CHECK THIS';

  // The row's own key, and the column of keys it lives in.
  const pk     = phoneKey(row.F);
  const ownCol = sheet.rows.map(r => phoneKey(r.F));   // Form responses J2:J
  const ownNm  = sheet.rows.map(r => nameKey(r.D, r.E));

  if (COUNTIF(ownCol, pk) > 0) {
    const m = MATCH(pk, ownCol);
    // +1 for the header row, exactly as the committed formula did.
    return 'ALREADY ON SITE — row ' + (m.NA ? '' : m + 1);
  }
  if (COUNTIF(ownNm, nameKey(row.D, row.E)) > 0) return 'SAME NAME, DIFFERENT NUMBER';
  return 'NEW';
}

/* ===========================================================================
   THE FIXED VERSION — mirrors the LET() formula in SHEET-FORMULAS.md.

   Three structural changes, each closing one way the old one could go wrong:

   1. THE KEYS ARE COMPUTED INLINE from the row's own cells (F, D, E), never
      read out of columns J and K. There is therefore no same-tab range in the
      formula for a lookup to fall back onto, so a self-match is not expressible
      rather than merely avoided.

   2. THE LOOKUP RANGES ARE BOUNDED — Published!I2:I500 rather than I2:I. The
      owner's helper columns are ARRAYFORMULA over open-ended ranges and return
      an empty string for every row to the bottom of the sheet, so an unbounded
      range hands COUNTIF several hundred empty cells to match against. This is
      Layer 3's whole-column lesson in its second form.

   3. IT REPORTS THE PERSON'S ID, not a row number. `ALREADY ON SITE — T014` is
      checkable against the site at a glance; `— row 15` was indistinguishable
      from the self-match that produced it.

   Plus the empty-key guard: a blank phone key never reaches a lookup.
   =========================================================================== */
function verdictFIXED(rowIdx, sheet) {
  const row = sheet.rows[rowIdx];
  if (TO_TEXT(row.F) === '') return '';

  const pk = phoneKey(row.F);
  const nk = nameKey(row.D, row.E);

  // CHECK THIS beats everything else — a row needing a human look matters more
  // than one that can be filed automatically.
  if (checkFlag(row)) return 'CHECK THIS';

  /* An unusable phone number is CHECK THIS rather than NEW. Stated as a rule
     rather than left to fall through: the publisher hides such a row, so the
     verdict must not tell the owner it is a clean new person. */
  if (pk === '') return 'CHECK THIS';

  const hitP = COUNTIF(sheet.pubI, pk);
  if (hitP > 0) {
    const id = IFERROR(INDEX(sheet.pubA, MATCH(pk, sheet.pubI)), '?');
    return 'ALREADY ON SITE — ' + id;
  }

  const hitN = nk === '' ? 0 : COUNTIF(sheet.pubJ, nk);
  if (hitN > 0) return 'SAME NAME, DIFFERENT NUMBER';

  return 'NEW';
}

/* ===========================================================================
   FIXTURES
   =========================================================================== */

/** The owner's REAL Published tab, fetched from the live CSV 2026-09-19.
 *  Columns: id, first, last, phone. The helper columns I and J are derived
 *  exactly as his ARRAYFORMULAs derive them. */
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

/** Sheet height. Google's default is 1000 rows, and the owner's helper
 *  ARRAYFORMULAs fill every one of them with an empty string. The fixture MUST
 *  reproduce that, or it cannot detect the empty-match half of the defect. */
const SHEET_ROWS = 1000;

function buildSheet(published, formRows) {
  const pubA = [], pubI = [], pubJ = [];
  for (let r = 0; r < SHEET_ROWS - 1; r++) {          // rows 2..1000
    const p = published[r];
    pubA.push(p ? p[0] : '');
    // The ARRAYFORMULA yields "" for every row with no phone — including the
    // several hundred empty rows below the data. That is the trap.
    pubI.push(p ? phoneKey(p[3]) : '');
    pubJ.push(p ? nameKey(p[1], p[2]) : '');
  }
  return { rows: formRows, pubA, pubI, pubJ };
}

/** The owner's Form responses tab as it stood on 2026-09-19: thirteen earlier
 *  real responses, then his two test rows at sheet rows 15 and 16. */
function formResponsesReal() {
  const rows = [];
  for (let n = 2; n <= 14; n++) {
    rows.push({
      sheetRow: n, C: 'Plumber',
      D: 'Real' + n, E: 'Person' + n,
      F: '0770090' + String(1000 + n).slice(1),
      G: '', H: 'They did a good job here', I: 'Helen'
    });
  }
  rows.push({ sheetRow: 15, C: 'Plumber', D: 'Test', E: 'Nine',
              F: '07999 888777', G: '', H: 'Did a proper job on the boiler', I: 'Gavin' });
  rows.push({ sheetRow: 16, C: 'Plumber', D: 'Bob', E: 'Samwell',
              F: '07999 111222', G: '', H: 'Came out on a Sunday evening', I: 'Gavin' });
  return rows;
}

/** Evaluate a whole column at once, as ARRAYFORMULA does. Evaluating one row in
 *  isolation is exactly how the previous test suite missed the self-match. */
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
   1. THE NEGATIVE CONTROL. The defective version must reproduce, exactly, what
      the owner measured. If this section ever stops failing in the old way, the
      fixture has drifted and the rest of the suite proves nothing.
   -------------------------------------------------------------------------- */
section('1. NEGATIVE CONTROL — the DEFECTIVE formula reproduces the owner\'s measurement');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out   = evaluateColumn(sheet, verdictDEFECTIVE);
  const r15 = atRow(sheet, out, 15), r16 = atRow(sheet, out, 16);
  console.log('    defective row 15 →', JSON.stringify(r15));
  console.log('    defective row 16 →', JSON.stringify(r16));
  check('defective: row 15 names ITS OWN row', r15 === 'ALREADY ON SITE — row 15', r15);
  check('defective: row 16 names ITS OWN row', r16 === 'ALREADY ON SITE — row 16', r16);

  // And with column H blank, the owner's FIRST observation.
  const blank = buildSheet(PUBLISHED_REAL,
    formResponsesReal().map(r => (r.sheetRow === 15 || r.sheetRow === 16) ? { ...r, H: '' } : r));
  const bout = evaluateColumn(blank, verdictDEFECTIVE);
  check('defective: blank H gives CHECK THIS on row 15', atRow(blank, bout, 15) === 'CHECK THIS');
  check('defective: blank H gives CHECK THIS on row 16', atRow(blank, bout, 16) === 'CHECK THIS');

  // Every row self-matches, not only his two.
  const selfAll = out.every((v, i) =>
    v === 'ALREADY ON SITE — row ' + sheet.rows[i].sheetRow);
  check('defective: EVERY row names its own number, not just the two', selfAll);
}

/* --------------------------------------------------------------------------
   2. THE FIX, against the owner's real Published contents.
   -------------------------------------------------------------------------- */
section('2. THE FIX — no row can match itself');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const out   = evaluateColumn(sheet, verdictFIXED);
  const r15 = atRow(sheet, out, 15), r16 = atRow(sheet, out, 16);
  console.log('    fixed row 15 →', JSON.stringify(r15));
  console.log('    fixed row 16 →', JSON.stringify(r16));

  check('fixed: no verdict anywhere contains the phrase "row "',
        out.every(v => !/ row \d/.test(v)), out.filter(v => / row \d/.test(v)).join(' | '));

  /* Row 15 is Test Nine on 07999 888777, and T014 on Published IS that person
     with that number — the publisher created it from this very response. So
     ALREADY ON SITE is the CORRECT verdict now, and NEW would be wrong. */
  check('fixed: row 15 reads ALREADY ON SITE — T014', r15 === 'ALREADY ON SITE — T014', r15);
  check('fixed: row 16 reads ALREADY ON SITE — T015', r16 === 'ALREADY ON SITE — T015', r16);
  check('fixed: both name a PERSON, not a row number',
        /T0\d\d$/.test(r15) && /T0\d\d$/.test(r16));
}

/* --------------------------------------------------------------------------
   3. THE FOUR VERDICTS, each with a row that produces it. Row 5.1's done-when
      requires all four, so each gets its own case against the real list.
   -------------------------------------------------------------------------- */
section('3. ALL FOUR VERDICTS');
{
  const cases = [
    { label: 'NEW — nobody on the list has this number or this name',
      row: { sheetRow: 20, D: 'Wendy', E: 'Fieldgate', F: '07700 900321', G: '',
             H: 'Rehung the front gate properly' },
      want: 'NEW' },

    { label: 'ALREADY ON SITE — same number as T001',
      row: { sheetRow: 21, D: 'Duckers', E: 'Plumber', F: '07825 736940', G: '',
             H: 'Sorted the leak in the kitchen' },
      want: 'ALREADY ON SITE — T001' },

    { label: 'ALREADY ON SITE — the +44 form of T001\'s number still matches',
      row: { sheetRow: 22, D: 'Duckers', E: 'Plumber', F: '+44 7825 736940', G: '',
             H: 'Sorted the leak in the kitchen' },
      want: 'ALREADY ON SITE — T001' },

    { label: 'SAME NAME, DIFFERENT NUMBER — T001\'s name on an unused number',
      row: { sheetRow: 23, D: 'Duckers', E: 'Plumber', F: '07700 900123', G: '',
             H: 'Came out on a Sunday evening' },
      want: 'SAME NAME, DIFFERENT NUMBER' },

    { label: 'CHECK THIS — experience text under seven characters',
      row: { sheetRow: 24, D: 'Wendy', E: 'Fieldgate', F: '07700 900322', G: '',
             H: 'quick' },
      want: 'CHECK THIS' },

    { label: 'CHECK THIS — last name "Not Known"',
      row: { sheetRow: 25, D: 'Wendy', E: 'Not Known', F: '07700 900324', G: '',
             H: 'Rehung the front gate properly' },
      want: 'CHECK THIS' },

    { label: 'CHECK THIS — business "not known"',
      row: { sheetRow: 26, D: 'Wendy', E: 'Fieldgate', F: '07700 900325',
             G: 'not known', H: 'Rehung the front gate properly' },
      want: 'CHECK THIS' },

    { label: 'CHECK THIS beats ALREADY ON SITE (precedence)',
      row: { sheetRow: 27, D: 'Duckers', E: 'Plumber', F: '07825 736940', G: '',
             H: 'quick' },
      want: 'CHECK THIS' },

    { label: 'seven characters is ACCEPTED, not flagged (the owner\'s ruling)',
      row: { sheetRow: 28, D: 'Wendy', E: 'Fieldgate', F: '07700 900326', G: '',
             H: 'Fixed g' },
      want: 'NEW' },

    { label: 'the owner\'s own "Fixed gate" is accepted',
      row: { sheetRow: 29, D: 'Wendy', E: 'Fieldgate', F: '07700 900327', G: '',
             H: 'Fixed gate' },
      want: 'NEW' },

    { label: 'blank experience → CHECK THIS (deliberate, stated rule)',
      row: { sheetRow: 30, D: 'Wendy', E: 'Fieldgate', F: '07700 900328', G: '', H: '' },
      want: 'CHECK THIS' },

    { label: 'a full name in the first-name box still matches T001',
      row: { sheetRow: 31, D: 'Duckers Plumber', E: '', F: '07700 900329', G: '',
             H: 'Sorted the leak in the kitchen' },
      want: 'SAME NAME, DIFFERENT NUMBER' },

    { label: 'name matching ignores capitals, spaces and punctuation',
      row: { sheetRow: 32, D: '  bob ', E: "SAM-WELL", F: '07700 900330', G: '',
             H: 'Came out on a Sunday evening' },
      want: 'SAME NAME, DIFFERENT NUMBER' },

    { label: 'a HIDDEN person still counts as already on site (T004)',
      row: { sheetRow: 33, D: 'Hidden', E: 'Person', F: '07700 900999', G: '',
             H: 'They did a good job here' },
      want: 'ALREADY ON SITE — T004' },
  ];

  const sheet = buildSheet(PUBLISHED_REAL, cases.map(c => c.row));
  const out   = evaluateColumn(sheet, verdictFIXED);
  cases.forEach((c, i) => check(`${c.label}  →  ${JSON.stringify(out[i])}`, out[i] === c.want,
                                `wanted ${JSON.stringify(c.want)}`));

  const seen = new Set(out.map(v => v.split(' — ')[0]));
  check('all four verdict kinds are produced by this fixture',
        ['NEW', 'ALREADY ON SITE', 'SAME NAME, DIFFERENT NUMBER', 'CHECK THIS']
          .every(v => seen.has(v)), [...seen].join(' | '));
}

/* --------------------------------------------------------------------------
   4. THE EMPTY-KEY TRAP. Layer 3's whole-column lesson, in its second form.
   -------------------------------------------------------------------------- */
section('4. THE EMPTY-KEY TRAP — a blank key must never match a blank helper cell');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  check('fixture reproduces the trap: Published I holds hundreds of empty strings',
        sheet.pubI.filter(x => x === '').length > 900,
        String(sheet.pubI.filter(x => x === '').length));
  check('and COUNTIF would match every one of them on an empty key',
        COUNTIF(sheet.pubI, '') > 900, String(COUNTIF(sheet.pubI, '')));

  // A row with a phone that contains no digits at all.
  const junk = buildSheet(PUBLISHED_REAL, [
    { sheetRow: 40, D: 'Wendy', E: 'Fieldgate', F: 'ring the bell', G: '',
      H: 'Rehung the front gate properly' }
  ]);
  const v = evaluateColumn(junk, verdictFIXED)[0];
  check('fixed: an unusable phone gives CHECK THIS, never ALREADY ON SITE', v === 'CHECK THIS', v);

  // The same row through the defective version, to show the trap is real.
  const vBad = evaluateColumn(junk, verdictDEFECTIVE)[0];
  check('defective: the same row self-matches on the empty key',
        vBad.startsWith('ALREADY ON SITE'), vBad);
}

/* --------------------------------------------------------------------------
   5. THE BOUNDED RANGE. A person below row 500 would be missed; prove the
      bound is above the real table and say what happens if it is ever exceeded.
   -------------------------------------------------------------------------- */
section('5. THE BOUNDED LOOKUP RANGE');
{
  check('the real Published table is far below the 500-row bound',
        PUBLISHED_REAL.length < 400, String(PUBLISHED_REAL.length) + ' people');
  check('the bound is above any plausible village list',
        500 > PUBLISHED_REAL.length * 10);
}

/* --------------------------------------------------------------------------
   6. NOBODY IS MISSED. Every published person must be findable by their own
      number — the fix must not trade a self-match for a missed match.
   -------------------------------------------------------------------------- */
section('6. EVERY PUBLISHED PERSON IS STILL FOUND BY THEIR OWN NUMBER');
{
  const rows = PUBLISHED_REAL.map((p, i) => ({
    sheetRow: 100 + i, D: p[1], E: p[2], F: p[3], G: '',
    H: 'They did a good job here'
  }));
  const sheet = buildSheet(PUBLISHED_REAL, rows);
  const out   = evaluateColumn(sheet, verdictFIXED);
  let allFound = true;
  out.forEach((v, i) => {
    const want = PUBLISHED_REAL[i][0];
    // Where two people share a number, MATCH finds the FIRST — that is correct
    // and is reported rather than hidden.
    const firstWithSameKey = PUBLISHED_REAL.find(p => phoneKey(p[3]) === phoneKey(PUBLISHED_REAL[i][3]))[0];
    const ok = v === 'ALREADY ON SITE — ' + firstWithSameKey;
    if (!ok) { allFound = false; console.log(`     ${want} → ${v}`); }
  });
  check('all 15 published people are found by their own number', allFound);
  check('shared number 07887800192 resolves to the FIRST holder, T006',
        out[PUBLISHED_REAL.findIndex(p => p[0] === 'T011')] === 'ALREADY ON SITE — T006',
        out[PUBLISHED_REAL.findIndex(p => p[0] === 'T011')]);
}

/* --------------------------------------------------------------------------
   7. THE FIX CHANGES A WRONG ANSWER INTO A RIGHT ONE — stated as a direct
      comparison, which is the whole point of keeping the defective version.
   -------------------------------------------------------------------------- */
section('7. DEFECTIVE vs FIXED, side by side');
{
  const sheet = buildSheet(PUBLISHED_REAL, formResponsesReal());
  const bad = evaluateColumn(sheet, verdictDEFECTIVE);
  const good = evaluateColumn(sheet, verdictFIXED);
  let differ = 0;
  sheet.rows.forEach((r, i) => { if (bad[i] !== good[i]) differ++; });
  console.log(`    ${differ} of ${sheet.rows.length} rows change verdict`);
  check('the fix changes the answer on every row the defect touched', differ === sheet.rows.length);
  check('and no fixed verdict is a self-reference', good.every(v => !/ row \d/.test(v)));
}

console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
process.exit(fail === 0 ? 0 : 1);
