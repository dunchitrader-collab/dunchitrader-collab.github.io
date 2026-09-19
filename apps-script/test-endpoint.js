/* Tests for the repointed recommendations endpoint (apps-script/Code.gs).
   Both Code.gs and Publish.gs are loaded into ONE scope, exactly as they sit
   in one Apps Script project, so the endpoint calls the REAL appendRecommendation.

   The stub's Published sheet mimics the owner's real one:
     - I and J hold FORMULA objects, so any write to them is detectable
     - the helpers return empty strings to row 1000, so getLastRow/getDataRange
       would be wrong and only lastIdRow() is right
     - one hidden row (T007, the twelve-digit phone) and one active row with
       existing recommendations. */

const fs = require('fs');
const vm = require('vm');
const REPO = '/home/gsamwell/projects/dunchi-trader';

const HEADER = ['id','first_name','last_name','business','phone','trade','extra_trade','status',
                'pub_phone_key','pub_name_key','recommendations','recommended_by'];

class Formula { constructor(v){ this.formulaResult = v; } }

function makeSheet(rows, name){
  const MAXROWS = 1000;
  const grid = [];
  grid.push(HEADER.slice());
  rows.forEach(r => grid.push(r.slice()));
  // pad to MAXROWS with the formula columns producing "" (the real trap)
  while (grid.length < MAXROWS){
    const blank = new Array(HEADER.length).fill('');
    blank[8] = new Formula(''); blank[9] = new Formula('');
    grid.push(blank);
  }
  // live rows also carry formula objects at I and J
  for (let r = 1; r <= rows.length; r++){
    grid[r][8] = new Formula('k'+r); grid[r][9] = new Formula('n'+r);
  }

  const log = { writes: [], reads: [], appendRow: 0, insert: 0 };

  function val(c){ return c instanceof Formula ? c.formulaResult : c; }

  const sheet = {
    getName(){ return name; },
    getMaxRows(){ return MAXROWS; },
    getLastRow(){
      /* Deliberately WRONG in exactly the way the owner's sheet is wrong, and
         this is the point of the fixture. Google counts a cell a FORMULA
         produces as content even when the formula returns an empty string, so
         the ARRAYFORMULA helpers at I and J make the sheet look 1000 rows tall.
         Anything using this value writes about a thousand lines below the
         table. Nothing in Code.gs or Publish.gs may call it. */
      for (let r = grid.length - 1; r >= 0; r--){
        if (grid[r].some(c => c instanceof Formula || c !== '')) return r + 1;
      }
      return 0;
    },
    getDataRange(){ log.reads.push('getDataRange'); return sheet.getRange(1,1,MAXROWS,HEADER.length); },
    appendRow(){ log.appendRow++; throw new Error('appendRow must never be called'); },
    insertRowAfter(){ log.insert++; throw new Error('insertRow must never be called'); },
    getRange(row, col, nr, nc){
      nr = nr === undefined ? 1 : nr; nc = nc === undefined ? 1 : nc;
      log.reads.push(`R${row}C${col}+${nr}x${nc}`);
      return {
        getValues(){
          const out = [];
          for (let r = 0; r < nr; r++){
            const line = [];
            for (let c = 0; c < nc; c++) line.push(val(grid[row-1+r][col-1+c]));
            out.push(line);
          }
          return out;
        },
        setValues(v){
          for (let r = 0; r < v.length; r++)
            for (let c = 0; c < v[r].length; c++){
              log.writes.push({row: row+r, col: col+c, value: v[r][c]});
              grid[row-1+r][col-1+c] = v[r][c];
            }
        },
        setValue(v){
          log.writes.push({row, col, value: v});
          grid[row-1][col-1] = v;
        },
        clearContent(){
          for (let r = 0; r < nr; r++)
            for (let c = 0; c < nc; c++){
              log.writes.push({row: row+r, col: col+c, value: '<cleared>'});
              grid[row-1+r][col-1+c] = '';
            }
        },
        setNumberFormat(){ return this; }
      };
    }
  };
  return { sheet, grid, log, val };
}

function build(rows){
  const pub = makeSheet(rows, 'Published');
  const votes = makeSheet([], 'Votes');
  const resp  = makeSheet([], 'Form responses 1');
  const opened = [];
  const ss = {
    getSheetByName(n){
      opened.push(n);
      if (n === 'Published') return pub.sheet;
      if (n === 'Votes') return votes.sheet;
      if (n === 'Form responses 1') return resp.sheet;
      return null;
    },
    getSheets(){ return [pub.sheet, votes.sheet, resp.sheet]; }
  };
  const logged = [];
  const sandbox = {
    SpreadsheetApp: { getActiveSpreadsheet: () => ss, getUi: () => ({ createMenu: () => ({ addItem(){return this;}, addToUi(){} }), alert(){} }) },
    ContentService: {
      createTextOutput: s => ({ _body: s, setMimeType(){ return this; } }),
      MimeType: { TEXT: 'TEXT', JSON: 'JSON' }
    },
    Logger: { log: m => { logged.push(String(m)); if (process.env.VERBOSE) console.log('   LOG:', String(m)); } },
    Utilities: { sleep(){} },
    console, JSON, String, Number, Date, Math, Array, Object, RegExp, parseInt, isNaN
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(REPO + '/apps-script/Publish.gs','utf8'), sandbox, {filename:'Publish.gs'});
  vm.runInContext(fs.readFileSync(REPO + '/apps-script/Code.gs','utf8'), sandbox, {filename:'Code.gs'});
  return { sandbox, pub, votes, resp, opened, logged };
}

function post(env, body, opts){
  opts = opts || {};
  const e = opts.form
    ? { parameter: body }
    : { postData: { contents: typeof body === 'string' ? body : JSON.stringify(body), type: 'text/plain' } };
  const res = env.sandbox.doPost(e);
  return JSON.parse(res._body);
}

// ---- fixture: the owner's shape ------------------------------------------
function rows(){
  return [
    ['T001','Dave','Trelawny','Trelawny Plumbing','07825 736940','Plumber','','active','','','Sorted the leak fast','Helen'],
    ['T002','Test','Sparky','Sparky Electrics','07700 900456','Electrician','Boiler & heating','active','','','',''],
    ['T007','Helen','Smith','','078853335434','Gardener','','hidden','','','',''],
    ['T012','Ron','Suttil','Suttil Metalwork','01392 123456','Builder','','active','','','Very good engineers\n\nCame out on a Sunday','Helen\n\nBob']
  ];
}

let pass = 0, fail = 0;
function check(label, cond, detail){
  if (cond){ pass++; console.log(`  PASS  ${label}`); }
  else { fail++; console.log(`  FAIL  ${label}${detail ? '  — ' + detail : ''}`); }
}

console.log('\n=== 1. A valid recommendation lands in K and L of the right row ===');
{
  const env = build(rows());
  const r = post(env, {id:'T002', name:'Gavin', text:'Rewired the kitchen'});
  check('reply ok:true', r.ok === true, JSON.stringify(r));
  const w = env.pub.log.writes;
  check('exactly 2 cells written', w.length === 2, JSON.stringify(w));
  check('both on row 3 (T002)', w.every(x => x.row === 3), JSON.stringify(w));
  check('columns are 11 (K) and 12 (L)', w.map(x=>x.col).sort().join(',') === '11,12', JSON.stringify(w.map(x=>x.col)));
  check('K got the words', w.find(x=>x.col===11).value === 'Rewired the kitchen');
  check('L got the name', w.find(x=>x.col===12).value === 'Gavin');
}

console.log('\n=== 2. A SECOND recommendation appends, it does not replace ===');
{
  const env = build(rows());
  const r = post(env, {id:'T001', name:'Bob', text:'Fixed gate'});
  check('reply ok:true', r.ok === true);
  const w = env.pub.log.writes;
  check('K holds BOTH, blank-line separated',
    w.find(x=>x.col===11).value === 'Sorted the leak fast\n\nFixed gate',
    JSON.stringify(w.find(x=>x.col===11).value));
  check('L holds BOTH names in step',
    w.find(x=>x.col===12).value === 'Helen\n\nBob',
    JSON.stringify(w.find(x=>x.col===12).value));
}

console.log('\n=== 3. THE D2 BOUND — it can never write outside K and L ===');
{
  const attempts = [
    {label:'ordinary valid post',        body:{id:'T001', name:'x', text:'Fixed gate'}},
    {label:'id with a tab name in it',   body:{id:'Published', name:'x', text:'Fixed gate'}},
    {label:'path-traversal id',          body:{id:'../Published!A1', name:'x', text:'Fixed gate'}},
    {label:'explicit tab parameter',     body:{id:'T001', name:'x', text:'Fixed gate', tab:'Votes'}},
    {label:'explicit sheet parameter',   body:{id:'T001', name:'x', text:'Fixed gate', sheet:'Form responses 1'}},
    {label:'explicit col parameter',     body:{id:'T001', name:'x', text:'Fixed gate', col:5, column:'E'}},
    {label:'explicit status parameter',  body:{id:'T001', name:'x', text:'Fixed gate', status:'active'}},
    {label:'explicit phone parameter',   body:{id:'T001', name:'x', text:'Fixed gate', phone:'07000 000000'}},
    {label:'a whole row as the payload', body:{id:'T001', name:'x', text:'Fixed gate', row:['T099','Bad','Actor','','07000000000','Plumber','','active','','','','']}},
  ];
  let allOK = true;
  attempts.forEach(a => {
    const env = build(rows());
    post(env, a.body);
    const w = env.pub.log.writes;
    const cols = [...new Set(w.map(x=>x.col))].sort((p,q)=>p-q);
    const ok = cols.every(c => c === 11 || c === 12);
    const oneRow = new Set(w.map(x=>x.row)).size <= 1;
    const noVotes = env.votes.log.writes.length === 0;
    const noResp  = env.resp.log.writes.length === 0;
    const noAppend = env.pub.log.appendRow === 0 && env.votes.log.appendRow === 0;
    if (!(ok && oneRow && noVotes && noResp && noAppend)) allOK = false;
    check(`${a.label}: cols ${JSON.stringify(cols)}, rows touched ${new Set(w.map(x=>x.row)).size}, Votes writes ${env.votes.log.writes.length}`,
          ok && oneRow && noVotes && noResp && noAppend);
  });
  check('NO attempt reached any column but K and L', allOK);
}

console.log('\n=== 4. The owner\'s formula columns I and J are never touched ===');
{
  const env = build(rows());
  post(env, {id:'T001', name:'x', text:'Fixed gate'});
  const touchedIJ = env.pub.log.writes.filter(w => w.col === 9 || w.col === 10);
  check('zero writes to column I (9) or J (10)', touchedIJ.length === 0, JSON.stringify(touchedIJ));
  check('I2 is still a Formula object', env.pub.grid[1][8] instanceof Formula);
  check('J2 is still a Formula object', env.pub.grid[1][9] instanceof Formula);
}

console.log('\n=== 5. An UNKNOWN id is refused and nothing is written ===');
{
  const env = build(rows());
  const r = post(env, {id:'T999', name:'x', text:'Fixed gate'});
  check('reply ok:false', r.ok === false, JSON.stringify(r));
  check('no cell written at all', env.pub.log.writes.length === 0, JSON.stringify(env.pub.log.writes));
  check('the refusal is logged', env.logged.some(l => /no such trader id "T999"/.test(l)), JSON.stringify(env.logged));
  check('no row created anywhere', env.pub.log.appendRow === 0 && env.pub.log.insert === 0);
}

console.log('\n=== 6. A HIDDEN id is refused and nothing is written ===');
{
  const env = build(rows());
  const r = post(env, {id:'T007', name:'x', text:'Fixed gate'});
  check('reply ok:false', r.ok === false, JSON.stringify(r));
  check('no cell written at all', env.pub.log.writes.length === 0, JSON.stringify(env.pub.log.writes));
  check('the refusal is logged', env.logged.some(l => /"T007" is not active/.test(l)), JSON.stringify(env.logged));
}

console.log('\n=== 7. SEVEN characters, matching the page and the sheet (row 4.6) ===');
{
  const env6 = build(rows());
  const r6 = post(env6, {id:'T001', name:'x', text:'Fix it'});          // 6
  check('6 characters REFUSED', r6.ok === false && /too short/.test(r6.error), JSON.stringify(r6));
  check('6 characters wrote nothing', env6.pub.log.writes.length === 0);

  const env7 = build(rows());
  const r7 = post(env7, {id:'T001', name:'x', text:'Fixed g'});         // 7
  check('7 characters ACCEPTED', r7.ok === true, JSON.stringify(r7));
  check('7 characters wrote K and L', env7.pub.log.writes.length === 2);

  const env10 = build(rows());
  const r10 = post(env10, {id:'T001', name:'x', text:'Fixed gate'});    // the owner's own example
  check('the owner\'s "Fixed gate" ACCEPTED', r10.ok === true, JSON.stringify(r10));
}

console.log('\n=== 8. The Votes tab is left completely alone ===');
{
  const env = build(rows());
  post(env, {id:'T001', name:'x', text:'Fixed gate'});
  post(env, {id:'T999', name:'x', text:'Fixed gate'});
  post(env, {id:'T007', name:'x', text:'Fixed gate'});
  check('Votes never written', env.votes.log.writes.length === 0);
  check('Votes never read',    env.votes.log.reads.length === 0);
  check('Votes never even opened', env.opened.indexOf('Votes') === -1, JSON.stringify(env.opened));
  check('responses tab never opened', env.opened.indexOf('Form responses 1') === -1, JSON.stringify(env.opened));
}

console.log('\n=== 9. The formula-column trap: the write lands in the TABLE, not row 1001 ===');
{
  const env = build(rows());
  check('the stub reproduces the trap (getLastRow is wrong)',
        env.pub.sheet.getLastRow() >= 999,
        'getLastRow=' + env.pub.sheet.getLastRow());
  post(env, {id:'T012', name:'x', text:'Fixed gate'});
  const w = env.pub.log.writes;
  check('the write is on row 5 (T012), not row 1001', w.every(x => x.row === 5), JSON.stringify(w.map(x=>x.row)));
  check('getDataRange was never called', env.pub.log.reads.indexOf('getDataRange') === -1);
}

console.log('\n=== 9b. NEGATIVE CONTROL — the fixture DOES catch the formula-column trap ===');
{
  /* A test that passes is only worth something if it could have failed. This
     stands in the naive implementation the project was bitten by and shows the
     same fixture rejects it. */
  const env = build(rows());
  const naiveTarget = env.pub.sheet.getLastRow() + 1;   // what appendRow would use
  check('a naive getLastRow()+1 would write to row 1001',
        naiveTarget === 1001, 'naive target row = ' + naiveTarget);
  check('lastIdRow() gives the correct row 5 instead',
        env.sandbox.lastIdRow(env.pub.sheet) === 5,
        'lastIdRow = ' + env.sandbox.lastIdRow(env.pub.sheet));
  check('the two DIFFER, so the fixture can tell them apart',
        naiveTarget !== env.sandbox.lastIdRow(env.pub.sheet) + 1);
}

console.log('\n=== 10. The exact body the SERVED page sends ===');
{
  const served = fs.readFileSync(REPO + '/app.js','utf8');
  const shape = served.match(/body:\s*JSON\.stringify\(\{id:\s*traderId,\s*name:\s*name,\s*text:\s*text\}\)/);
  check('served app.js sends {id, name, text}', !!shape);
  const env = build(rows());
  // byte-for-byte the string the page would produce
  const body = JSON.stringify({id: 'T001', name: 'Gavin', text: 'Fixed gate'});
  const r = post(env, body);
  check('doPost parses that exact string', r.ok === true, JSON.stringify(r));
  check('and writes K and L', env.pub.log.writes.length === 2);
}

console.log('\n=== 11. A duplicate tap records nothing twice ===');
{
  const env = build(rows());
  const a = post(env, {id:'T002', name:'Gavin', text:'Rewired the kitchen'});
  const before = env.pub.log.writes.length;
  const b = post(env, {id:'T002', name:'Gavin', text:'Rewired the kitchen'});
  check('first is ok:true, added:true', a.ok === true && a.added === true, JSON.stringify(a));
  check('second is ok:true, added:false', b.ok === true && b.added === false, JSON.stringify(b));
  check('second wrote nothing', env.pub.log.writes.length === before);
}

console.log('\n=== 12. Blank name becomes "a villager", same as the publisher ===');
{
  const env = build(rows());
  post(env, {id:'T002', name:'', text:'Fixed gate'});
  check('L got "a villager"', env.pub.log.writes.find(x=>x.col===12).value === 'a villager',
        JSON.stringify(env.pub.log.writes.find(x=>x.col===12)));
}

console.log('\n=== 13. Missing id, missing text, empty body ===');
{
  [{}, {name:'x', text:'Fixed gate'}, {id:'T001', name:'x'}, {id:'', name:'x', text:'Fixed gate'}]
    .forEach((b,i) => {
      const env = build(rows());
      const r = post(env, b);
      check(`malformed body ${i} refused, nothing written`, r.ok === false && env.pub.log.writes.length === 0,
            JSON.stringify(r));
    });
  // A body that is not JSON at all
  const env = build(rows());
  const r = post(env, 'not json at all');
  check('non-JSON body refused, nothing written', r.ok === false && env.pub.log.writes.length === 0, JSON.stringify(r));
}

console.log('\n=== 14. Form-parameter posts work too (hand test from a browser form) ===');
{
  const env = build(rows());
  const r = post(env, {id:'T001', name:'Bob', text:'Fixed gate'}, {form:true});
  check('form params accepted', r.ok === true, JSON.stringify(r));
  check('still only K and L', env.pub.log.writes.every(w => w.col === 11 || w.col === 12));
}

console.log('\n=== 15. Case-insensitive id, and length caps ===');
{
  const env = build(rows());
  check('lowercase t001 matches T001', post(env, {id:'t001', name:'x', text:'Fixed gate'}).ok === true);
  const env2 = build(rows());
  post(env2, {id:'T002', name:'N'.repeat(500), text:'W'.repeat(5000)});
  const w = env2.pub.log.writes;
  check('name capped at 120', w.find(x=>x.col===12).value.length === 120, String(w.find(x=>x.col===12).value.length));
  check('text capped at 2000', w.find(x=>x.col===11).value.length === 2000, String(w.find(x=>x.col===11).value.length));
}

console.log('\n=== 16. doGet answers, and leaks nothing ===');
{
  const env = build(rows());
  const out = env.sandbox.doGet({})._body;
  check('doGet exists and returns a plain note', /only accepts recommendations/.test(out));
  check('doGet leaks no sheet detail', !/Published|Votes|T00|spreadsheet/i.test(out), out);
}

console.log('\n=== 17. Publish.gs missing → refuses loudly rather than half-working ===');
{
  const sandbox = {
    SpreadsheetApp: { getActiveSpreadsheet: () => { throw new Error('should not get here'); } },
    ContentService: { createTextOutput: s => ({ _body: s, setMimeType(){ return this; } }), MimeType:{TEXT:'TEXT',JSON:'JSON'} },
    Logger: { log(){} }, console, JSON, String, Number, Date, Math, Array, Object, RegExp, parseInt, isNaN
  };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(REPO + '/apps-script/Code.gs','utf8'), sandbox, {filename:'Code.gs'});
  const r = JSON.parse(sandbox.doPost({postData:{contents:JSON.stringify({id:'T001',name:'x',text:'Fixed gate'})}})._body);
  check('refuses when Publish.gs is absent', r.ok === false, JSON.stringify(r));
}

console.log('\n=== 18. appendRecommendation is the SHARED function, not a copy ===');
{
  const env = build(rows());
  // Replace the shared function with a sentinel; if Code.gs had its own copy,
  // the sentinel would never fire.
  let called = null;
  const real = env.sandbox.appendRecommendation;
  env.sandbox.appendRecommendation = function(pub, values, rowIdx, words, by){
    called = {rowIdx, words, by};
    return real.apply(null, arguments);
  };
  post(env, {id:'T001', name:'Bob', text:'Fixed gate'});
  check('Code.gs called Publish.gs appendRecommendation', called !== null, JSON.stringify(called));
  check('with the right row and values', called && called.rowIdx === 1 && called.words === 'Fixed gate' && called.by === 'Bob',
        JSON.stringify(called));
}

console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
process.exit(fail === 0 ? 0 : 1);
