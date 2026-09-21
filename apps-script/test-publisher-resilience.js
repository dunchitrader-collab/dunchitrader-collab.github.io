/* The publisher's resilience, correctness and visibility — build plan step 6.
 *
 * ============================================================================
 * NEGATIVE CONTROLS FIRST. This file was written BEFORE the fixes and every
 * control below was WATCHED FAILING against the then-current Publish.gs.
 *
 * Three fixes on 2026-09-19 passed their own tests and failed on the Owner's
 * screen. The rule this file follows: a test that has never been seen to fail
 * proves nothing, so each section states what the OLD behaviour was and asserts
 * the NEW behaviour differs from it.
 *
 * Run with CONTROL=1 to assert the OLD behaviour instead — that is the mode the
 * controls were verified in, against the pre-fix file.
 * ============================================================================
 *
 * HOW TO RUN:  node apps-script/test-publisher-resilience.js
 * No dependencies.
 */

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const REPO = path.resolve(__dirname, '..');

const HDR = ['id','first_name','last_name','business','phone','trade','extra_trade',
             'status','pub_phone_key','pub_name_key','recommendations','recommended_by'];

/* A cell an ARRAYFORMULA produced. Writing to one destroys the formula, so the
   stub makes any such write detectable — the 2026-09-18 defect. */
class Formula { constructor(v){ this.v = v; } }

/* ===========================================================================
   THE STUB SHEET — models the owner's real spreadsheet, including the traps.
   =========================================================================== */
function makeSheet(rows, name, opts) {
  opts = opts || {};
  const MAX = 1000;
  const g = [HDR.slice()];
  rows.forEach(r => g.push(r.slice()));
  while (g.length < MAX) {
    const b = new Array(HDR.length).fill('');
    b[8] = new Formula(''); b[9] = new Formula('');   // open-ended helpers
    g.push(b);
  }
  for (let r = 1; r <= rows.length; r++) { g[r][8] = new Formula('k'+r); g[r][9] = new Formula('n'+r); }

  const log = { reads: 0, writes: [], cells: 0 };
  const val = c => c instanceof Formula ? c.v : c;

  const sheet = {
    getName: () => name,
    getMaxRows: () => MAX,
    getLastRow(){ for (let r = g.length-1; r >= 0; r--) if (g[r].some(c => c instanceof Formula || c !== '')) return r+1; return 0; },
    getDataRange(){ return sheet.getRange(1,1,MAX,HDR.length); },
    appendRow(){ throw new Error('appendRow must never be used'); },
    getRange(row, col, nr, nc){
      nr = nr === undefined ? 1 : nr; nc = nc === undefined ? 1 : nc;
      return {
        getValues(){
          log.reads++; log.cells += nr*nc;
          if (opts.failReads && log.reads <= opts.failReads)
            throw new Error('Service Spreadsheets failed while accessing document with id 1j9SVNJG');
          const out = [];
          for (let r = 0; r < nr; r++){ const l=[]; for (let c = 0; c < nc; c++) l.push(val(g[row-1+r][col-1+c])); out.push(l); }
          return out;
        },
        setValues(v){ for (let r=0;r<v.length;r++) for (let c=0;c<v[r].length;c++){ log.writes.push({row:row+r,col:col+c,value:v[r][c]}); g[row-1+r][col-1+c]=v[r][c]; } },
        setValue(v){ log.writes.push({row,col,value:v}); g[row-1][col-1]=v; },
        clearContent(){ for(let r=0;r<nr;r++) for(let c=0;c<nc;c++){ log.writes.push({row:row+r,col:col+c,value:'<cleared>'}); g[row-1+r][col-1+c]=''; } },
        setNumberFormat(){ return this; }
      };
    }
  };
  return { sheet, grid: g, log };
}

/* The Form responses tab. Column M is `action` — empty on every row today. */
const FR_HDR = ['Timestamp','Email Address','What Trade are you recommending?',
  'What is their First name?','What is their Last name?','What is their telephone number?',
  'What is their Business called? (Optional)',
  'Please give a short amount of text to describe your experience with them and why you are recommending them.',
  'Finally please give your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions.',
  'phone_key','name_key','verdict','action'];

function makeResponses(rows) {
  const g = [FR_HDR.slice()];
  rows.forEach(r => g.push(r.slice()));
  const log = { writes: [] };
  const sheet = {
    getName: () => 'Form responses 1',
    getMaxRows: () => g.length,
    getLastRow: () => g.length,
    getDataRange(){ return sheet.getRange(1,1,g.length,FR_HDR.length); },
    getRange(row,col,nr,nc){
      nr = nr===undefined?1:nr; nc = nc===undefined?1:nc;
      return {
        getValues(){ const o=[]; for(let r=0;r<nr;r++){const l=[];for(let c=0;c<nc;c++)l.push(g[row-1+r][col-1+c]);o.push(l);} return o; },
        setValues(v){ for(let r=0;r<v.length;r++) for(let c=0;c<v[r].length;c++){ log.writes.push({row:row+r,col:col+c,value:v[r][c]}); g[row-1+r][col-1+c]=v[r][c]; } },
        setValue(v){ log.writes.push({row,col,value:v}); g[row-1][col-1]=v; }
      };
    }
  };
  return { sheet, grid: g, log };
}

/* ===========================================================================
   LOAD THE REAL Publish.gs
   =========================================================================== */
let LOG = [], LOCKS = [], TRIGGERS = [], SLEPT = 0, ALERTS = [], PROPS = {};

function load(pub, resp, lockOpts) {
  LOG = []; LOCKS = []; SLEPT = 0; ALERTS = [];
  lockOpts = lockOpts || {};
  const ss = {
    getSheetByName: n => (n === 'Published') ? pub.sheet
                       : (n === 'Form responses 1' || n === 'Form Responses 1' || n === 'Form responses') ? (resp ? resp.sheet : null)
                       : null,
    getSheets: () => [pub.sheet].concat(resp ? [resp.sheet] : []),
    getId: () => '1j9SVNJG_stub'
  };
  const sandbox = {
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ss,
      getUi: () => ({ createMenu: () => ({ addItem(){ return this; }, addSeparator(){ return this; }, addToUi(){} }),
                      alert: m => ALERTS.push(String(m)) })
    },
    ContentService: { createTextOutput: s => ({_b:s, setMimeType(){return this;}}), MimeType:{TEXT:'T',JSON:'J'} },
    Logger: { log: m => LOG.push(String(m)) },
    Utilities: { sleep: ms => { SLEPT += ms; } },
    PropertiesService: { getScriptProperties: () => ({
        getProperty: k => PROPS[k] || null, setProperty: (k,v) => { PROPS[k] = v; } }) },
    LockService: { getScriptLock: () => ({
        tryLock(ms){ LOCKS.push('tryLock('+ms+')'); return lockOpts.denied ? false : true; },
        releaseLock(){ LOCKS.push('release'); } }) },
    ScriptApp: {
      getProjectTriggers: () => TRIGGERS.slice(),
      deleteTrigger: t => { TRIGGERS = TRIGGERS.filter(x => x !== t); },
      newTrigger: fn => ({ timeBased: () => ({ everyMinutes: m => ({ create: () => {
          const t = { fn, minutes: m, getHandlerFunction: () => fn }; TRIGGERS.push(t); return t; } }) }) })
    },
    console, JSON, String, Number, Date, Math, Array, Object, RegExp, parseInt, parseFloat, isNaN
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(REPO + '/apps-script/Publish.gs','utf8'), sandbox, {filename:'Publish.gs'});
  return sandbox;
}

/* ===========================================================================
   FIXTURES — the owner's real data shape
   =========================================================================== */
const PUBLISHED = [
  ['T001','Duckers','Plumber','','07825 736940','Plumber','','hidden','','','top blokes','Frankie Valentine'],
  ['T003','Another','Roofer','','01392 123456','Roof & gutters','','hidden','','','Really helpful','Gavin'],
  ['T006','Ben','Franks','','07887800192','Electrician','','hidden','','','Came out Sunday','Tim'],
  ['T011','John','Pilkington','','07887800192','Car mechanic','','hidden','','','',''],
  ['T016','Andy','Watson','','+44 7775 726754','Plumber','','active','','','Efficient','Tim'],
  ['T020','Gecko','Geckster','Geckos garage','01392 47484847','Car mechanic','','hidden','','','Nice chap','Hazel'],
];
const sub = o => Object.assign({trade:'Plumber',first:'A',last:'B',phone:'07700900111',business:'',words:'Did a good job here',by:'Tim'}, o);

/* ===========================================================================
   SUITE
   =========================================================================== */
const CONTROL = !!process.env.CONTROL;
let pass = 0, fail = 0;
function check(label, cond, detail){
  if (cond){ pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label + (detail ? '  — ' + detail : '')); }
}
function section(t){ console.log('\n=== ' + t + ' ==='); }
console.log(CONTROL
  ? '### CONTROL MODE — asserting the OLD behaviour. Every check here PASSED against the pre-fix file.\n'
  : '### FIX MODE — asserting the NEW behaviour.\n');

/* -------------------------------------------------------------------------
   6.3a — A FIELD WITH TWO NUMBERS MUST BE REFUSED, NOT WELDED
   NEGATIVE CONTROL: the old normalisePhone returned a 22-digit string.
   ------------------------------------------------------------------------- */
section('6.3a — two numbers in one field');
{
  const P = load(makeSheet(PUBLISHED,'Published'));
  const welded = P.normalisePhone('07872 065874 or 01392 980312');
  console.log('    normalisePhone("07872 065874 or 01392 980312") ->', JSON.stringify(welded));
  if (CONTROL) {
    check('OLD: welds two numbers into one 22-digit string', welded === '0787206587401392980312', welded);
  } else {
    check('two numbers are REFUSED, not welded', welded !== '0787206587401392980312', welded);
    check('the refusal is detectable by the caller',
          typeof P.phoneProblem === 'function' && !!P.phoneProblem('07872 065874 or 01392 980312'),
          'phoneProblem() must name the fault');
    console.log('    phoneProblem ->', JSON.stringify(P.phoneProblem ? P.phoneProblem('07872 065874 or 01392 980312') : null));
    check('Murray Angel\'s "Or" form is refused too',
          !!(P.phoneProblem && P.phoneProblem('01626 879961 Or 07966 184788')));
    check('a single clean number is still accepted',
          P.normalisePhone('07887522959') === '07887522959' && !(P.phoneProblem && P.phoneProblem('07887522959')));
    check('the +44 form still folds correctly (must not regress)',
          P.normalisePhone('+44 7775 726754') === '07775726754', P.normalisePhone('+44 7775 726754'));
    check('the 0044 form still folds correctly',
          P.normalisePhone('0044 7887 988959') === '07887988959', P.normalisePhone('0044 7887 988959'));
  }
}

/* -------------------------------------------------------------------------
   6.3b — MERGE ON PHONE **AND** NAME
   NEGATIVE CONTROL: the old rowIndexForPhone matched on the number alone, so
   John Pilkington's submission merged onto Ben Franks — they share a number.
   ------------------------------------------------------------------------- */
section('6.3b — two people on one number must stay two people');
{
  const pub = makeSheet(PUBLISHED,'Published');
  const P = load(pub);
  const vals = P.tableValues(pub.sheet);
  const key = P.normalisePhone('07887800192');
  if (CONTROL) {
    const at = P.rowIndexForPhone(vals, key);
    check('OLD: phone-only match finds the FIRST holder regardless of name',
          at !== -1 && vals[at][0] === 'T006', 'matched ' + (at!==-1?vals[at][0]:'none'));
  } else {
    check('a matcher taking the name exists', typeof P.rowIndexForPerson === 'function');
    if (typeof P.rowIndexForPerson === 'function') {
      const ben  = P.rowIndexForPerson(vals, key, 'Ben', 'Franks');
      const john = P.rowIndexForPerson(vals, key, 'John', 'Pilkington');
      const zoe  = P.rowIndexForPerson(vals, key, 'Zoe', 'Newcomer');
      check('Ben Franks matches T006',  ben  !== -1 && vals[ben][0]  === 'T006', ben!==-1?vals[ben][0]:'none');
      check('John Pilkington matches T011 — NOT T006', john !== -1 && vals[john][0] === 'T011', john!==-1?vals[john][0]:'none');
      check('a THIRD person on that number matches NOBODY', zoe === -1, String(zoe));
    }
  }
}

/* -------------------------------------------------------------------------
   6.1a — A TRANSIENT SERVICE FAILURE IS RETRIED
   NEGATIVE CONTROL: the old onFormSubmitPublish caught it and returned. One
   attempt, nothing written, nothing the Owner could see. Stuart Ironside.
   ------------------------------------------------------------------------- */
section('6.1a — a transient Service Spreadsheets failure recovers');
{
  const pub = makeSheet(PUBLISHED,'Published',{failReads:2});   // first two reads throw
  const resp = makeResponses([]);
  const P = load(pub, resp);
  const e = { namedValues: {
    'What Trade are you recommending?': ['Builder'],
    'What is their First name?': ['Stuart'], 'What is their Last name?': ['Ironside'],
    'What is their telephone number?': ['07887522959'],
    'What is their Business called? (Optional)': [''],
    'Please give a short amount of text to describe your experience with them and why you are recommending them.': ['Did a lovely job on the wall'],
    'Finally please give your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions.': ['Lin'] } };
  P.onFormSubmitPublish(e);
  const created = pub.log.writes.some(w => w.col === 1 && String(w.value).startsWith('T'));
  console.log('    reads attempted:', pub.log.reads, '| slept:', SLEPT, 'ms | row created:', created);
  if (CONTROL) {
    check('OLD: one attempt, no row, failure swallowed into the log',
          pub.log.reads === 1 && !created, `reads=${pub.log.reads} created=${created}`);
  } else {
    check('the failure is RETRIED', pub.log.reads > 1, 'reads=' + pub.log.reads);
    check('it backs off between attempts', SLEPT > 0, SLEPT + 'ms');
    check('the row IS eventually created', created);
    check('and it recovers within three attempts', pub.log.reads <= 4, 'reads=' + pub.log.reads);
  }
}

/* -------------------------------------------------------------------------
   6.1b — A SUBMISSION THE TRIGGER NEVER DELIVERED IS SWEPT UP
   NEGATIVE CONTROL: no sweep existed. Murray Angel's class.
   ------------------------------------------------------------------------- */
section('6.1b — a submission Google never delivered is recovered by the sweep');
{
  const pub = makeSheet(PUBLISHED,'Published');
  const resp = makeResponses([
    ['9/19/2026 20:07:52','','Builder','Stuart','Ironside','07887522959','','Did a lovely job','Lin','','','NEW','']
  ]);
  const P = load(pub, resp);
  if (CONTROL) {
    check('OLD: no scheduled sweep function exists', typeof P.sweepPublished !== 'function');
  } else {
    check('a sweep function exists', typeof P.sweepPublished === 'function');
    if (typeof P.sweepPublished === 'function') {
      P.sweepPublished();
      const created = pub.log.writes.filter(w => w.col === 1 && String(w.value).startsWith('T'));
      check('the missed submission is published by the sweep', created.length === 1, JSON.stringify(created));
      check('it takes the next free id, T021', created.length === 1 && created[0].value === 'T021',
            created.length ? created[0].value : 'none');
    }
  }
}

/* -------------------------------------------------------------------------
   6.1c — AN IDLE SWEEP MUST BE CHEAP (this gates the five-minute interval)
   NEGATIVE CONTROL: backfillPublished calls publishOne per response, and each
   re-reads the whole Published tab. Quadratic.
   ------------------------------------------------------------------------- */
section('6.1c — an idle sweep costs almost nothing');
{
  const N = 60;
  const many = [];
  for (let i = 1; i <= N; i++)
    many.push(['T'+String(i).padStart(3,'0'),'P'+i,'Person','', '077009'+String(10000+i).slice(1),'Plumber','','active','','','w'+i,'n'+i]);
  /* IDLE means every response has already been dealt with — which is the state
     the sweep is in 287 times out of 288 on a five-minute schedule. The action
     column carries an outcome, so there is nothing to do. That is the case
     whose cost decides whether five minutes is affordable. */
  const respRows = many.map((r,i) => ['9/19/2026','', 'Plumber', r[1], r[2], r[4], '', 'words here for '+i, 'by', '','','', 'Published as '+r[0]]);

  const pubA = makeSheet(many,'Published'), respA = makeResponses(respRows);
  const A = load(pubA, respA);
  A.backfillPublished();
  const oldCells = pubA.log.cells, oldReads = pubA.log.reads;
  console.log(`    backfillPublished over ${N} responses: ${oldReads} range reads, ${oldCells.toLocaleString()} cells`);

  if (CONTROL) {
    check('OLD: cost grows with responses x published (quadratic)', oldReads > N, `reads=${oldReads}`);
  } else {
    const pubB = makeSheet(many,'Published'), respB = makeResponses(respRows);
    const B = load(pubB, respB);
    check('a sweep function exists', typeof B.sweepPublished === 'function');
    if (typeof B.sweepPublished === 'function') {
      B.sweepPublished();
      const newCells = pubB.log.cells, newReads = pubB.log.reads;
      console.log(`    sweepPublished  over ${N} responses: ${newReads} range reads, ${newCells.toLocaleString()} cells`);
      console.log(`    reduction: ${oldReads} -> ${newReads} reads (${(oldReads/Math.max(newReads,1)).toFixed(1)}x fewer)`);
      check('the idle sweep reads Published a SMALL constant number of times',
            newReads <= 4, 'reads=' + newReads);
      check('it is dramatically cheaper than the backfill', newReads * 5 < oldReads,
            `${newReads} vs ${oldReads}`);
      check('an idle sweep writes NOTHING', pubB.log.writes.length === 0,
            JSON.stringify(pubB.log.writes.slice(0,3)));

      /* And a sweep with ONE thing to do is still cheap — the case that
         actually recovers a Murray Angel. */
      const busyRows = respRows.slice();
      busyRows.push(['9/19/2026','','Builder','Stuart','Ironside','07887522959','','Did a lovely job','Lin','','','','']);
      const pubC = makeSheet(many,'Published'), respC = makeResponses(busyRows);
      const C = load(pubC, respC);
      C.sweepPublished();
      console.log(`    sweep with ONE missed submission: ${pubC.log.reads} reads, ${pubC.log.cells.toLocaleString()} cells`);
      const madeC = pubC.log.writes.filter(w => w.col === 1 && String(w.value).startsWith('T'));
      check('a sweep with one thing to do recovers it', madeC.length === 1, JSON.stringify(madeC));
      check('and is still cheap', pubC.log.reads <= 4, 'reads=' + pubC.log.reads);
    }
  }
}

/* -------------------------------------------------------------------------
   6.1d — A SCRIPT LOCK
   NEGATIVE CONTROL: nothing in the file used LockService.
   ------------------------------------------------------------------------- */
section('6.1d — sweep and form submit cannot collide');
{
  const src = fs.readFileSync(REPO + '/apps-script/Publish.gs','utf8');
  if (CONTROL) {
    check('OLD: LockService is never used', !/LockService/.test(src));
  } else {
    check('LockService is used', /LockService/.test(src));
    // the form path takes a lock
    const pub = makeSheet(PUBLISHED,'Published'), resp = makeResponses([]);
    const P = load(pub, resp);
    P.onFormSubmitPublish({ namedValues: {
      'What Trade are you recommending?': ['Plumber'],
      'What is their First name?': ['Zoe'], 'What is their Last name?': ['Newcomer'],
      'What is their telephone number?': ['07700900555'],
      'What is their Business called? (Optional)': [''],
      'Please give a short amount of text to describe your experience with them and why you are recommending them.': ['Very good work'],
      'Finally please give your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions.': ['Tim'] } });
    check('the form path takes and releases a lock',
          LOCKS.some(l => l.startsWith('tryLock')) && LOCKS.includes('release'), JSON.stringify(LOCKS));

    // denied lock: must NOT write
    const pub2 = makeSheet(PUBLISHED,'Published'), resp2 = makeResponses([]);
    const Q = load(pub2, resp2, {denied:true});
    Q.onFormSubmitPublish({ namedValues: {
      'What Trade are you recommending?': ['Plumber'],
      'What is their First name?': ['Zoe'], 'What is their Last name?': ['Newcomer'],
      'What is their telephone number?': ['07700900555'],
      'What is their Business called? (Optional)': [''],
      'Please give a short amount of text to describe your experience with them and why you are recommending them.': ['Very good work'],
      'Finally please give your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions.': ['Tim'] } });
    check('a denied lock means NOTHING is written', pub2.log.writes.length === 0,
          JSON.stringify(pub2.log.writes.slice(0,2)));
    check('a denied lock is recorded, not silent', LOG.length > 0, JSON.stringify(LOG));
  }
}

/* -------------------------------------------------------------------------
   6.1e — MENU INSTALLATION, IDEMPOTENT
   ------------------------------------------------------------------------- */
section('6.1e — the sweep installs from a menu and is safe to click twice');
{
  TRIGGERS = [];
  const pub = makeSheet(PUBLISHED,'Published'), resp = makeResponses([]);
  const P = load(pub, resp);
  if (CONTROL) {
    check('OLD: no installer exists', typeof P.installSweep !== 'function');
  } else {
    check('an installer exists', typeof P.installSweep === 'function');
    if (typeof P.installSweep === 'function') {
      P.installSweep();
      const after1 = TRIGGERS.length;
      P.installSweep();
      const after2 = TRIGGERS.length;
      check('clicking once installs one trigger', after1 === 1, 'count=' + after1);
      check('clicking twice does NOT create a second', after2 === 1, 'count=' + after2);
      check('it is time-based and frequent', TRIGGERS[0] && TRIGGERS[0].minutes <= 15,
            TRIGGERS[0] ? TRIGGERS[0].minutes + ' min' : 'none');
    }
  }
}

/* -------------------------------------------------------------------------
   6.2a — THE action COLUMN CARRIES AN OUTCOME LINE
   NEGATIVE CONTROL: it is empty on every row today.
   ------------------------------------------------------------------------- */
section('6.2a — every response records what happened to it');
{
  const cases = [
    { label: 'published',  row: ['9/19','','Builder','Stuart','Ironside','07887522959','','Did a lovely job','Lin','','','',''], want: /Published as T0\d\d/ },
    { label: 'merged',     row: ['9/19','','Roof & gutters','Another','Roofer','01392 123456','','More words here','Bob','','','',''], want: /Merged into T003/ },
    { label: 'two numbers',row: ['9/19','','Electrician','Lee','Schofield','07872 065874 or 01392 980312','','Good work here','Tim','','','',''], want: /two numbers|more than one number/i },
  ];
  cases.forEach(c => {
    const pub = makeSheet(PUBLISHED,'Published'), resp = makeResponses([c.row]);
    const P = load(pub, resp);
    if (CONTROL) {
      P.backfillPublished();
      check(`OLD: "${c.label}" writes nothing to the action column`, resp.log.writes.length === 0,
            JSON.stringify(resp.log.writes));
    } else if (typeof P.sweepPublished === 'function') {
      P.sweepPublished();
      const actionCol = FR_HDR.indexOf('action') + 1;
      const w = resp.log.writes.filter(x => x.col === actionCol);
      const text = w.length ? String(w[w.length-1].value) : '';
      console.log(`    ${c.label}: action = ${JSON.stringify(text)}`);
      check(`"${c.label}" records an outcome in the action column`, c.want.test(text), text || '(empty)');
    }
  });
}

/* -------------------------------------------------------------------------
   6.2d — checkSetup's FALSE POSITIVE on +44
   NEGATIVE CONTROL: it flags T016's +44 number the publisher accepts.
   ------------------------------------------------------------------------- */
section('6.2d — checkSetup and the publisher agree about a +44 number');
{
  const P = load(makeSheet(PUBLISHED,'Published'), makeResponses([]));
  const raw = '+44 7775 726754';
  const publisherAccepts = P.normalisePhone(raw).length === 11;
  const rawDigits = raw.replace(/\D/g,'');
  console.log(`    publisher key=${JSON.stringify(P.normalisePhone(raw))} (${P.normalisePhone(raw).length}) | raw digits=${rawDigits.length}`);
  check('the publisher accepts it', publisherAccepts);
  if (CONTROL) {
    check('OLD: a raw-digit check disagrees — 12 digits, so it is flagged',
          rawDigits.length !== 11, rawDigits.length + ' digits');
  } else {
    check('a shared helper exists so the two cannot disagree',
          typeof P.phoneLooksWrong === 'function');
    if (typeof P.phoneLooksWrong === 'function') {
      check('checkSetup\'s helper does NOT flag the +44 number', !P.phoneLooksWrong(raw));
      check('and it still flags a genuinely bad one', !!P.phoneLooksWrong('01392 47484847'));
    }
  }
}

/* -------------------------------------------------------------------------
   REGRESSION — the guards won today must survive
   ------------------------------------------------------------------------- */
section('REGRESSION — today\'s guards still hold');
{
  const P = load(makeSheet(PUBLISHED,'Published'), makeResponses([]));
  check('sanitise still collapses an interior blank line', P.sanitise('a\n\nb') === 'a\nb');
  check('a blank name still becomes ANON on append', P.ANON === 'a villager');
  check('FORMULA_COLS still protects I and J', JSON.stringify(P.FORMULA_COLS) === '[8,9]');
  const blocks = P.writableBlocks();
  check('writable blocks are still A-H and K-L',
        JSON.stringify(blocks) === '[{"start":0,"len":8},{"start":10,"len":2}]', JSON.stringify(blocks));
  check('ids still come from the highest present, never a count',
        P.nextId([[], ['T001'], ['T020'], ['T003']]) === 'T021', P.nextId([[], ['T001'], ['T020'], ['T003']]));
}

/* -------------------------------------------------------------------------
   2026-09-21 — THE AUDIT TRAIL MUST NOT KILL THE RECOVERY IT IS AUDITING.

   MEASURED IN THE OWNER'S OWN ACCOUNT, first live run of the sweep:

     07:11:10  Info   sweep published 8 missed submission(s)
     07:11:11  Error  The data you entered in cell M2 violates the data
                      validation rules set on this cell. Please enter one of
                      the following values: Publish, Add to T0xx, Reject.

   Column M carried a leftover data-validation dropdown from the manual triage
   era. The sweep published 8 rows, then threw one second later writing the
   audit note — so ROW 6.2's MECHANISM KILLED ROW 6.1's FUNCTION.

   The controls below reproduce that exact throw with a stub cell that refuses
   the write the same way Sheets does. In CONTROL mode they assert the OLD
   behaviour: the throw escapes and `recordSweepRun` never runs.
   ------------------------------------------------------------------------- */
section('2026-09-21 — a refused action write must never abort the sweep');

/* A Form responses stub whose `action` column (M, index 13) refuses every
   write exactly as a data-validation rule does. Everything else behaves. */
function makeResponsesRefusingAction(rows) {
  const r = makeResponses(rows);
  const inner = r.sheet.getRange.bind(r.sheet);
  const VALIDATION_MSG =
    'The data you entered in cell M2 violates the data validation rules set ' +
    'on this cell. Please enter one of the following values: Publish, Add to T0xx, Reject.';
  r.refused = 0;
  r.sheet.getRange = function (row, col, nr, nc) {
    const rng = inner(row, col, nr, nc);
    if (col === 13) {
      return Object.assign({}, rng, {
        setValue() { r.refused++; throw new Error(VALIDATION_MSG); },
        setValues() { r.refused++; throw new Error(VALIDATION_MSG); },
        getValues: rng.getValues
      });
    }
    return rng;
  };
  return r;
}

/* Two real submissions nobody has published, matching the Owner's shape. */
const TWO_MISSED = [
  ['2026-09-20 20:03', '', 'Plumber', 'Murray', 'Angel', '07700900222', '',
   'Turned up when he said he would', 'Tim', '', '', '', ''],
  ['2026-09-20 20:07', '', 'Carpenter', 'Stuart', 'Ironside', '07700900333', '',
   'Made a lovely job of the gate', 'Lin', '', '', '', '']
];

{
  PROPS = {};
  const pub  = makeSheet(PUBLISHED, 'Published');
  const resp = makeResponsesRefusingAction(TWO_MISSED);
  const P    = load(pub, resp);

  let threw = null;
  try { P.sweepPublished(); } catch (e) { threw = e; }

  if (CONTROL) {
    check('CONTROL: the refused note throws straight out of the sweep',
          threw !== null, 'no throw escaped');
    check('CONTROL: recordSweepRun never runs, so the run is not remembered',
          !PROPS.lastSweep, 'lastSweep was set to ' + PROPS.lastSweep);
  } else {
    check('a refused action write does NOT throw out of the sweep',
          threw === null, threw && threw.message);
    check('the sweep still completed and remembered the run',
          !!PROPS.lastSweep, 'lastSweep not set');
  }

  /* THE PUBLISHING ITSELF MUST HAPPEN EITHER WAY — that is what was at risk. */
  const ids = pub.grid.slice(1).map(r => r[0]).filter(Boolean);
  check('both missed submissions were published despite the refused note',
        ids.includes('T021') && ids.includes('T022'),
        'ids present: ' + ids.join(','));
  check('the stub really did refuse the write (the control is live)',
        resp.refused > 0, 'refused count ' + resp.refused);
}

/* THE SECOND FIRING. This is the duplicate question, and it is the one that
   matters most: the action column is still blank (every write was refused),
   so the next sweep reconsiders the very same rows. */
{
  PROPS = {};
  const pub  = makeSheet(PUBLISHED, 'Published');
  const resp = makeResponsesRefusingAction(TWO_MISSED);
  const P    = load(pub, resp);

  try { P.sweepPublished(); } catch (ignored) {}
  const afterFirst = pub.grid.slice(1).map(r => r[0]).filter(Boolean).length;

  /* Re-load against the SAME published sheet, as the next timer firing would. */
  const P2 = load(pub, resp);
  try { P2.sweepPublished(); } catch (ignored) {}
  const afterSecond = pub.grid.slice(1).map(r => r[0]).filter(Boolean).length;

  check('a SECOND firing adds no duplicate rows to Published',
        afterSecond === afterFirst,
        'rows went ' + afterFirst + ' -> ' + afterSecond);

  const ids = pub.grid.slice(1).map(r => r[0]).filter(Boolean);
  check('no id appears twice on Published after two firings',
        new Set(ids).size === ids.length, ids.join(','));

  /* And the words are not doubled on the merged row either. */
  const murray = pub.grid.slice(1).find(r => String(r[1]).indexOf('Murray') === 0);
  const blocks = murray ? String(murray[10]).split('\n\n').filter(s => s.trim()).length : -1;
  check('the recommendation text is not appended twice by the second firing',
        blocks === 1, 'recommendation blocks = ' + blocks);
}

/* THE DUPLICATE QUESTION, answered against the REAL merge functions rather
   than against a re-run of the whole sweep.

   The situation on the Owner's sheet: the 07:11 run published some rows and
   then threw, so their action cells are still BLANK and every later firing
   reconsiders them. What stops a duplicate is not the action cell — it is the
   phone-AND-name merge finding the row the aborted run already wrote. */
{
  const HDR_ = HDR.slice();
  const already = [HDR_,
    ['T021','Murray','Angel','','07700900222','Plumber','','active','','',
     'Turned up when he said','Tim']];
  const same = { trade:'Plumber', first:'Murray', last:'Angel', phone:'07700900222',
                 business:'', words:'Turned up when he said', by:'Tim' };

  const P = load(makeSheet(PUBLISHED,'Published'), makeResponses([]));
  const key = P.normalisePhone(same.phone);
  const at  = P.rowIndexForPerson(already, key, same.first, same.last);

  check('the merge finds a row an aborted run already published',
        at === 1, 'rowIndexForPerson returned ' + at);

  const out = P.publishInto({getRange:()=>({setValue(){},setValues(){}})}, already, same);
  check('re-publishing the same person MERGES rather than adding a row',
        out.added === false, JSON.stringify(out));

  const before = already[1][10];
  const appended = P.appendRecommendation({getRange:()=>({setValue(){}})},
                                          already, 1, same.words, same.by);
  check('identical words are refused, so the text is not doubled',
        appended === false && already[1][10] === before,
        'returned ' + appended);
}

/* THE FORM-SUBMIT PATH was already protected — `note()` swallows its own
   failure. Asserted here so a later edit cannot quietly remove that guard. */
{
  PROPS = {};
  const pub  = makeSheet(PUBLISHED, 'Published');
  const resp = makeResponsesRefusingAction([]);
  const P    = load(pub, resp);

  let threw = null;
  try {
    P.note({ getSheetByName: () => resp.sheet, getSheets: () => [resp.sheet] },
           2, 'Published as T021');
  } catch (e) { threw = e; }
  check('note() still swallows a refused write rather than throwing',
        threw === null, threw && threw.message);
}

console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
process.exit(fail === 0 ? 0 : 1);
