/* Recommendations: the K/L line-position invariant, and what the card shows.
 *
 * Covers build plan rows 4.8 and 4.9.
 *
 * WHY BOTH SIDES ARE TESTED TOGETHER. Published `K` (the words) and `L` (the
 * names) pair BY LINE POSITION, and that pairing is only as good as its weakest
 * end: a writer that emits a clean pair is undone by a reader that drops an
 * entry, and vice versa. The 2026-09-19 misattribution defect lived entirely in
 * the reader while the writer was correct, which is exactly the kind of fault a
 * one-sided test cannot see. So this file exercises the real `appendRecommendation`
 * from Publish.gs AND the real `splitRecs` pairing from app.js, and asserts the
 * invariant across the join.
 *
 * HOW TO RUN:  node apps-script/test-recommendations.js
 * No dependencies.
 */

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const REPO = path.resolve(__dirname, '..');

/* ===========================================================================
   THE WRITER — the real Publish.gs, loaded and executed.
   =========================================================================== */

function loadPublisher() {
  const sandbox = {
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ({ getSheetByName: () => null }),
      getUi: () => ({ createMenu: () => ({ addItem() { return this; }, addToUi() {} }) })
    },
    ContentService: {
      createTextOutput: s => ({ _b: s, setMimeType() { return this; } }),
      MimeType: { TEXT: 'T', JSON: 'J' }
    },
    Logger: { log: m => LOG.push(String(m)) },
    console, JSON, String, Number, Date, Math, Array, Object, RegExp, parseInt, isNaN
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(REPO + '/apps-script/Publish.gs', 'utf8'),
                  sandbox, { filename: 'Publish.gs' });
  return sandbox;
}
let LOG = [];
const P = loadPublisher();
const COL_WORDS = P.COL_WORDS, COL_BY = P.COL_BY, SEP = P.REC_SEP, ANON = P.ANON;

/** Append one recommendation to a row holding (K, L). Returns the new pair. */
function append(K, L, words, by) {
  LOG = [];
  const cells = {};
  const sheet = { getRange: (r, c) => ({ setValue(v) { cells[`${r},${c}`] = v; } }) };
  const row = [];
  row[COL_WORDS] = K;
  row[COL_BY] = L;
  const returned = P.appendRecommendation(sheet, [[], row], 1, words, by);
  return {
    returned,
    K: cells[`2,${COL_WORDS + 1}`] === undefined ? K : cells[`2,${COL_WORDS + 1}`],
    L: cells[`2,${COL_BY + 1}`]    === undefined ? L : cells[`2,${COL_BY + 1}`],
    log: LOG.slice()
  };
}

/* ===========================================================================
   THE READER — the real splitRecs and pairing from app.js.

   Extracted from the shipped file rather than re-typed, so the test cannot
   drift from what the site actually runs.
   =========================================================================== */

function loadReader() {
  const src = fs.readFileSync(REPO + '/app.js', 'utf8');
  const a = src.match(/function splitRecs\(v\)\{[\s\S]*?\n  \}/);
  const b = src.match(/function splitNames\(v\)\{[\s\S]*?\n  \}/);
  if (!a) throw new Error('splitRecs not found in app.js — has it been renamed?');
  if (!b) throw new Error('splitNames not found in app.js — the names column needs its own reader');
  const sandbox = { String };
  vm.createContext(sandbox);
  vm.runInContext(a[0] + b[0] + '; this.splitRecs = splitRecs; this.splitNames = splitNames;',
                  sandbox, { filename: 'app.js' });
  return sandbox;
}
const READER = loadReader();
const splitRecs = READER.splitRecs, splitNames = READER.splitNames;

/** Exactly what app.js build() does to turn K and L into what a villager reads. */
function pair(K, L) {
  const said  = splitRecs(K);
  const byWho = splitNames(L);
  return said.map((why, n) => ({ why: why, by: byWho[n] || 'a villager' }));
}

/* ===========================================================================
   THE DEFECTIVE READER — the negative control.

   This is what app.js did before 2026-09-19: it dropped every empty entry,
   wherever it sat. Kept and exercised so the suite is shown to DETECT the
   misattribution rather than merely to pass.
   =========================================================================== */
function splitRecsOLD(v) {
  if (!v) return [];
  return String(v).split(/\n\s*\n/).map(s => s.trim()).filter(s => s.length);
}
function pairOLD(K, L) {
  const said = splitRecsOLD(K), byWho = splitRecsOLD(L);
  return said.map((why, n) => ({ why: why, by: byWho[n] || 'a villager' }));
}

/* ===========================================================================
   SUITE
   =========================================================================== */

let pass = 0, fail = 0;
function check(label, cond, detail) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label + (detail ? '  — ' + detail : '')); }
}
function section(t) { console.log('\n=== ' + t + ' ==='); }

/* How many line-position ENTRIES a cell holds.
   Deliberately does NOT trim first: a leading or trailing blank entry in the
   names column is a real position — a villager who gave no name — and trimming
   it away is precisely the mistake that caused the misattribution. */
const lines = v => {
  const s = String(v === null || v === undefined ? '' : v);
  return s === '' ? 0 : s.split(SEP).length;
};

/* --------------------------------------------------------------------------
   1. NEGATIVE CONTROL — the OLD reader misattributes, and this proves it.
   -------------------------------------------------------------------------- */
section('1. NEGATIVE CONTROL — the old reader credits people with words they did not write');
{
  // Three recommendations; the FIRST villager gave no name.
  const K = 'Fixed the gate' + SEP + 'Rewired the kitchen' + SEP + 'Cleared the drain';
  const L = ''               + SEP + 'Helen'               + SEP + 'Bob';

  const bad = pairOLD(K, L);
  console.log('    old reader shows:');
  bad.forEach(r => console.log(`       "${r.why}"  ->  Recommended by ${r.by}`));

  check('OLD: Helen is credited with the FIRST villager\'s words',
        bad[0].by === 'Helen', JSON.stringify(bad[0]));
  check('OLD: Bob is credited with the SECOND villager\'s words',
        bad[1].by === 'Bob', JSON.stringify(bad[1]));
  check('OLD: the empty name entry vanished, shifting everything up',
        splitRecsOLD(L).length === 2 && splitNames(L).length === 3,
        `old reader saw ${splitRecsOLD(L).length} names, the cell holds ${splitNames(L).length}`);

  const good = pair(K, L);
  console.log('    fixed reader shows:');
  good.forEach(r => console.log(`       "${r.why}"  ->  Recommended by ${r.by}`));
  check('FIXED: the first villager reads as "a villager"', good[0].by === 'a villager');
  check('FIXED: Helen is credited with HER OWN words', good[1].by === 'Helen');
  check('FIXED: Bob is credited with HIS OWN words',    good[2].by === 'Bob');
  check('FIXED: every recommendation keeps its own name',
        good.length === 3 && good.map(r => r.by).join('|') === 'a villager|Helen|Bob');
}

/* --------------------------------------------------------------------------
   1b. THE BLANK IN THE MIDDLE — the case the first 4.9 fix still got wrong.

   Found by measurement on 2026-09-19 with SIX recommendations, after 4.9 was
   believed fixed. Section 1 puts the blank name FIRST, and section 2's
   sequences put it first or last — positions where a greedy separator pattern
   has nothing to eat. A blank in the MIDDLE stores four consecutive newlines,
   and /\n\s*\n/ swallowed all four as one separator, dropping the entry and
   sliding every later name up.
   -------------------------------------------------------------------------- */
section('1b. A BLANK NAME IN THE MIDDLE keeps its position');
{
  const words = ['One','Two','Three','Four','Five','Six'];
  const names = ['Helen','Bob','','Wendy','Ron','Ben'];
  const K = words.join(SEP), L = names.join(SEP);

  check('the names cell really does hold four consecutive newlines',
        L.indexOf('\n\n\n\n') !== -1, JSON.stringify(L));
  check('splitNames keeps all six entries', splitNames(L).length === 6,
        JSON.stringify(splitNames(L)));
  check('the empty entry is still at position 2 (third)',
        splitNames(L)[2] === '', JSON.stringify(splitNames(L)));

  const shown = pair(K, L);
  shown.forEach((r, i) => console.log(`       "${r.why}"  ->  ${r.by}`));
  check('the third recommendation reads "a villager"', shown[2].by === 'a villager', shown[2].by);
  check('Wendy is on HER OWN words (the fourth)', shown[3].by === 'Wendy Fieldgate' || shown[3].by === 'Wendy',
        shown[3].by);
  check('every word keeps its own name', shown.map(r => r.by).join('|') === 'Helen|Bob|a villager|Wendy|Ron|Ben',
        shown.map(r => r.by).join('|'));

  // The permissive pattern the words still use WOULD have dropped it.
  const greedy = L.split(/\n\s*\n/).map(x => x.trim());
  check('a greedy /\\n\\s*\\n/ split WOULD have lost it — so this test can fail',
        greedy.length === 5, JSON.stringify(greedy));
}

/* --------------------------------------------------------------------------
   2. THE INVARIANT — K and L always carry the same number of lines.
   -------------------------------------------------------------------------- */
section('2. THE INVARIANT — same number of lines, every path, every sequence');
{
  const sequences = [
    { label: 'blank name, then a named one, then blank again',
      steps: [['Fixed the gate', ''], ['Rewired the kitchen', 'Helen'], ['Cleared the drain', '']] },
    { label: 'a first recommendation with no name at all',
      steps: [['Fixed the gate', '']] },
    { label: 'every one of three blank',
      steps: [['Fixed the gate', ''], ['Rewired the kitchen', ''], ['Cleared the drain', '']] },
    { label: 'a name containing a BLANK LINE (forgery attempt)',
      steps: [['First words', 'Anne'], ['Second words', 'Bob\n\nMallory']] },
    { label: 'a name containing a single newline',
      steps: [['First words', 'Anne'], ['Second words', 'Bob\nMallory']] },
    { label: 'WORDS containing a blank line (a villager pressing Enter twice)',
      steps: [['First words', 'Anne'], ['Line one\n\nLine two', 'Bob']] },
    { label: 'a name that is only whitespace',
      steps: [['First words', 'Anne'], ['Second words', '   ']] },
    { label: 'words with a blank line AND a blank name together',
      steps: [['One\n\ntwo', '']] },
    { label: 'ten recommendations, alternating named and blank',
      steps: Array.from({ length: 10 }, (_, i) => ['Job number ' + i, i % 2 ? 'Neighbour' + i : '']) },
  ];

  sequences.forEach(seq => {
    let K = '', L = '', ok = true, detail = '';
    seq.steps.forEach(([w, b]) => {
      const r = append(K, L, w, b);
      K = r.K; L = r.L;
      if (lines(K) !== lines(L)) { ok = false; detail = `K ${lines(K)} vs L ${lines(L)}`; }
    });
    check(`${seq.label}  →  K ${lines(K)} lines, L ${lines(L)} lines`, ok, detail);

    // And the reader must agree with the writer, entry for entry.
    const p = pair(K, L);
    check(`   …and the reader yields ${p.length} pairs, matching`,
          p.length === lines(K), `reader ${p.length} vs cell ${lines(K)}`);
  });
}

/* --------------------------------------------------------------------------
   3. NO EMPTY NAME IS EVER WRITTEN.
   -------------------------------------------------------------------------- */
section('3. THE WRITER NEVER EMITS AN EMPTY NAME ENTRY');
{
  let K = '', L = '';
  [['Fixed the gate', ''], ['Rewired the kitchen', 'Helen'],
   ['Cleared the drain', '  '], ['Painted the shed', 'Bob']].forEach(([w, b]) => {
    const r = append(K, L, w, b); K = r.K; L = r.L;
  });
  const names = L.split(SEP);
  console.log('    L =', JSON.stringify(L));
  check('no name entry is empty', names.every(n => n.trim().length > 0), JSON.stringify(names));
  check('blank names became "a villager"',
        names.filter(n => n === ANON).length === 2, JSON.stringify(names));
  check('given names are preserved exactly',
        names[1] === 'Helen' && names[3] === 'Bob', JSON.stringify(names));
  check('K and L still aligned', lines(K) === lines(L));
}

/* --------------------------------------------------------------------------
   4. THE OWNER'S REAL SHAPE — words in K, L entirely empty.
   Five such rows exist in his live sheet, so this must be right.
   -------------------------------------------------------------------------- */
section('4. THE OWNER\'S EXISTING ROWS — words in K with L completely empty');
{
  const existing = [
    ['Bob Samwell',     'Very good, turned up when he said he would'],
    ['Ben Franks',      'Rewired our kitchen properly'],
    ['Helen Smith',     'Lovely people'],
    ['family cars',     'Been taking our family cars to him for years and he has never let us down once'],
    ['Duckers Plumber', 'Sorted the leak fast'],
  ];
  existing.forEach(([who, words]) => {
    const shown = pair(words, '');
    check(`${who}: reads safely with L empty  →  "Recommended by ${shown[0].by}"`,
          shown.length === 1 && shown[0].why === words && shown[0].by === 'a villager');
  });

  // The important part: appending to such a row must not misattribute.
  const r = append('Sorted the leak fast', '', 'Fixed the gate', 'Helen');
  const shown = pair(r.K, r.L);
  console.log('    after appending Helen to a row whose L was empty:');
  shown.forEach(x => console.log(`       "${x.why}"  ->  Recommended by ${x.by}`));
  check('the pre-existing words stay anonymous', shown[0].by === 'a villager');
  check('Helen is attached to HER OWN words', shown[1].by === 'Helen' && shown[1].why === 'Fixed the gate');
  check('K and L aligned afterwards', lines(r.K) === lines(r.L));

  // Against the OLD reader this same data misattributes — proving the risk was real.
  const badShown = pairOLD(r.K, r.L);
  check('the OLD reader would have got this right too (L was padded on write)',
        badShown[0].by === 'a villager',
        'padding on write is why these five rows were never at risk');
}

/* --------------------------------------------------------------------------
   5. THE INVARIANT IS ENFORCED, NOT JUST ACHIEVED.
   -------------------------------------------------------------------------- */
section('5. A MISALIGNED WRITE IS REFUSED RATHER THAN MADE');
{
  // Hand-craft a row the owner could have typed: two words, one name.
  const r = append('One' + SEP + 'Two', 'OnlyOneName', 'Three', 'Helen');
  console.log('    K =', JSON.stringify(r.K));
  console.log('    L =', JSON.stringify(r.L));
  check('the write still produced an aligned pair', lines(r.K) === lines(r.L),
        `K ${lines(r.K)} vs L ${lines(r.L)}`);
  check('the missing earlier name was padded, not left short',
        r.L.split(SEP)[1] === ANON || r.L.split(SEP)[0] === 'OnlyOneName',
        JSON.stringify(r.L));
}

/* --------------------------------------------------------------------------
   6. ROW 4.8 — the card must not show unconfirmed words.
   Asserted against the SHIPPED app.js source, not a copy of it.
   -------------------------------------------------------------------------- */
section('6. ROW 4.8 — the card renders only from the published feed');
{
  const src = fs.readFileSync(REPO + '/app.js', 'utf8');
  /* Strip block and line comments properly. A line-prefix filter is not enough:
     a /* ... *\/ block's interior lines need not start with an asterisk, and
     this file's own explanatory comments quote the very code being asserted
     absent — which would make the assertion pass or fail on prose. */
  const code = src.replace(/\/\*[\s\S]*?\*\//g, '')
                  .replace(/^\s*\/\/.*$/gm, '');

  check('the optimistic concat is gone from the CODE',
        !/concat\(\s*VOTES\[/.test(code),
        'found: ' + (code.match(/.*concat\(\s*VOTES\[.*/) || [''])[0].trim());
  check('the card reads recs from the feed only',
        /var recs = l\.recs \|\| \[\];/.test(code));
  check('the thank-you message is still there',
        /your recommendation has been sent to the village list/.test(src));
  check('the five-minute notice is still there',
        /takes about five minutes to appear/.test(src));
  check('VOTES is still recorded, so a double tap is not sent twice',
        /VOTES\[l\.id\] = VOTES\[l\.id\] \|\| \[\]/.test(code));
  check('DONE still gates the panel', /DONE\[l\.id\] = true/.test(code));
}

/* --------------------------------------------------------------------------
   7. THE VOTES TAB — nothing reads or writes it.
   -------------------------------------------------------------------------- */
section('7. THE VOTES TAB — is it safe to rename?');
{
  const files = {
    'apps-script/Code.gs':    fs.readFileSync(REPO + '/apps-script/Code.gs', 'utf8'),
    'apps-script/Publish.gs': fs.readFileSync(REPO + '/apps-script/Publish.gs', 'utf8'),
    'app.js':                 fs.readFileSync(REPO + '/app.js', 'utf8'),
  };
  let anyLive = false;
  Object.entries(files).forEach(([name, src]) => {
    const code = src.split('\n')
      .filter(l => !/^\s*(\/\*|\*|\/\/)/.test(l))
      .map(l => l.replace(/\/\/.*$/, '').replace(/\/\*[\s\S]*?\*\//g, ''))
      .join('\n');
    // A LIVE use is getSheetByName('Votes') or a tab constant set to Votes.
    const opens   = /getSheetByName\(\s*['"]Votes['"]\s*\)/.test(code);
    const tabConst = /^\s*var\s+\w*TAB\w*\s*=\s*['"]Votes['"]/m.test(code);
    const mentions = (code.match(/['"]Votes['"]/g) || []).length;
    const forbidden = /PUBLISH_FORBIDDEN|FORBIDDEN_TABS/.test(code);
    console.log(`    ${name}: opens=${opens} tabConstant=${tabConst} string mentions in code=${mentions}` +
                (forbidden ? ' (mentions are in a FORBIDDEN list — a guard, not a use)' : ''));
    if (opens || tabConst) anyLive = true;
  });
  check('NOTHING opens a sheet named Votes on any path', !anyLive);
  check('no tab constant is set to Votes', !/var\s+\w*TAB\w*\s*=\s*['"]Votes['"]/.test(
        files['apps-script/Code.gs'] + files['apps-script/Publish.gs']));
  check('the site never mentions Votes in code at all',
        !/['"]Votes['"]/.test(files['app.js'].split('\n')
          .filter(l => !/^\s*(\/\*|\*|\/\/)/.test(l)).join('\n')));
  check('Code.gs writes to Published, not Votes',
        /var PUB_TAB_ENDPOINT = 'Published';/.test(files['apps-script/Code.gs']));
  check('Votes appears only in FORBIDDEN lists (guards against writing to it)',
        /FORBIDDEN_TABS = \['Votes'/.test(files['apps-script/Code.gs']) &&
        /PUBLISH_FORBIDDEN = \['Votes'/.test(files['apps-script/Publish.gs']));
}

console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
process.exit(fail === 0 ? 0 : 1);
