/* The recommendation panel, driven in a REAL browser.
 *
 * Why this exists as a committed file rather than a throwaway: every claim this
 * project makes about zoom, overflow and the panel is a measurement, and a
 * measurement nobody can repeat is an assertion. Run it and you get the same
 * numbers.
 *
 * WHAT IT DOES NOT TOUCH. The Google feed is stubbed with fixture data and the
 * votes POST is intercepted and answered locally, so this never reads the
 * owner's sheet and never writes a row to it. The POST bodies it captures are
 * asserted against instead.
 *
 * HOW TO RUN IT
 *   1. Start Chrome with remote debugging on port 9333:
 *        ~/.cache/puppeteer/chrome/linux-*\/chrome-linux64/chrome \
 *          --headless=new --disable-gpu --no-sandbox \
 *          --remote-debugging-port=9333 --user-data-dir=/tmp/dvs-chrome about:blank &
 *   2. node scripts/test-panel-browser.js
 *
 * It needs no npm install — scripts/cdp.js is a dependency-free DevTools
 * Protocol client written for this project.
 */

const { get, WS } = require('./cdp.js');
const fs = require('fs');
const REPO = require('path').resolve(__dirname, '..');

// A fixture feed — the owner's real shape, but our own test data, so nothing
// touches his sheet and nothing depends on the live feed being up.
const FEED = [
  'id,first_name,last_name,business,phone,trade,extra_trade,status,pub_phone_key,pub_name_key,recommendations,recommended_by',
  'T001,Dave,Trelawny,Trelawny Plumbing,07825 736940,Plumber,,active,,,Sorted the leak fast,Helen',
  'T002,Test,Sparky,Sparky Electrics,07700 900456,Electrician,Boiler & heating,active,,,,',
  'T012,Ron,Suttil,Suttil Metalwork,01392 123456,Builder,,active,,,"Very good engineers, especially good with metal",Helen'
].join('\n');

(async () => {
  const tgt = await get('http://127.0.0.1:9333/json/new?about:blank', 'PUT');
  const ws = new WS(tgt.webSocketDebuggerUrl);
  await ws.ready;
  await ws.send('Page.enable');
  await ws.send('Runtime.enable');
  await ws.send('Network.enable');
  await ws.send('Fetch.enable', { patterns: [{urlPattern:'*'}] });

  const posts = [];
  // Intercept: serve the local files, stub the feed, BLOCK the votes POST.
  ws.sock.on('data', () => {});
  const origDrain = ws.drain.bind(ws);
  ws.drain = function(){
    while (this.buf.length >= 2){
      const b1=this.buf[0], b2=this.buf[1];
      let len=b2&127, off=2;
      if (len===126){ if(this.buf.length<4) return; len=this.buf.readUInt16BE(2); off=4; }
      else if (len===127){ if(this.buf.length<10) return; len=Number(this.buf.readBigUInt64BE(2)); off=10; }
      if (this.buf.length < off+len) return;
      const payload=this.buf.slice(off,off+len).toString('utf8');
      this.buf=this.buf.slice(off+len);
      if ((b1&0x0f)!==1) continue;
      let msg; try{ msg=JSON.parse(payload); }catch(e){ continue; }
      if (msg.id && this.pending.has(msg.id)){
        const {resolve,reject}=this.pending.get(msg.id); this.pending.delete(msg.id);
        msg.error?reject(new Error(JSON.stringify(msg.error))):resolve(msg.result);
      } else if (msg.method === 'Fetch.requestPaused'){
        handle(msg.params).catch(e=>console.error('handler', e.message));
      }
    }
  };

  const b64 = s => Buffer.from(s,'utf8').toString('base64');
  async function handle(p){
    const url = p.request.url;
    const id  = p.requestId;
    const respond = (body, mime) => ws.send('Fetch.fulfillRequest', {
      requestId: id, responseCode: 200,
      responseHeaders: [{name:'Content-Type', value: mime}, {name:'Access-Control-Allow-Origin', value:'*'}],
      body: b64(body)
    });
    if (url.includes('/pub?') && url.includes('output=csv')) return respond(FEED, 'text/csv');
    if (url.includes('script.google.com')){
      posts.push({url, body: p.request.postData || ''});
      return respond('{"ok":true}', 'application/json');   // BLOCKED — never reaches Google
    }
    if (url === 'http://dunchi.test/' )            return respond(fs.readFileSync(REPO+'/index.html','utf8'), 'text/html');
    if (url === 'http://dunchi.test/app.js')       return respond(fs.readFileSync(REPO+'/app.js','utf8'), 'text/javascript');
    if (url === 'http://dunchi.test/style.css')    return respond(fs.readFileSync(REPO+'/style.css','utf8'), 'text/css');
    return ws.send('Fetch.failRequest', {requestId:id, errorReason:'BlockedByClient'});
  }

  const ev = async (expr) => {
    const r = await ws.send('Runtime.evaluate', {expression: expr, returnByValue: true, awaitPromise: true});
    if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails.exception));
    return r.result.value;
  };

  let pass=0, fail=0;
  const check = (label, cond, detail) => {
    if (cond){ pass++; console.log(`  PASS  ${label}`); }
    else { fail++; console.log(`  FAIL  ${label}${detail?'  — '+detail:''}`); }
  };

  async function scenario(width, dsf, label){
    await ws.send('Emulation.setDeviceMetricsOverride',
      {width, height: 640, deviceScaleFactor: 1, mobile: true});
    await ws.send('Page.navigate', {url:'http://dunchi.test/'});
    await new Promise(r=>setTimeout(r,1200));
    if (dsf) await ev(`document.querySelectorAll('.sizer button')[2].click()`);  // the largest A
    await new Promise(r=>setTimeout(r,300));
    // open the first card's panel
    await ev(`document.querySelector('.tile,.trade,button').click?0:0`);
    return label;
  }

  console.log('\n### Chrome 148, local build, feed stubbed, votes POST blocked ###');

  // --- 320px, largest text size, panel open ---
  await ws.send('Emulation.setDeviceMetricsOverride', {width:320, height:640, deviceScaleFactor:1, mobile:true});
  await ws.send('Page.navigate', {url:'http://dunchi.test/'});
  await new Promise(r=>setTimeout(r,1500));

  const sizeBtns = await ev(`document.querySelectorAll('.sizer button').length`);
  console.log('    body text:', (await ev('document.body.textContent.slice(0,150)')));
  console.log(`\n=== Setup: ${sizeBtns} text-size buttons found ===`);
  await ev(`(function(){var b=document.querySelectorAll('.sizer button');b[b.length-1].click();return 1})()`);
  await new Promise(r=>setTimeout(r,300));
  const rootPx = await ev(`getComputedStyle(document.documentElement).fontSize`);
  console.log(`    root font-size at largest A: ${rootPx}`);

  // tap a trade, then open the panel
  const tapped = await ev(`(function(){
    var b=[].slice.call(document.querySelectorAll('button')).filter(function(x){return /Plumber/.test(x.textContent)});
    if(!b.length) return 'no trade button: '+document.body.textContent.slice(0,200);
    b[0].click(); return 'tapped '+b[0].textContent.trim();
  })()`);
  console.log(`    ${tapped}`);
  await new Promise(r=>setTimeout(r,300));
  const opened = await ev(`(function(){
    var v=[].slice.call(document.querySelectorAll('button.vote'));
    if(!v.length) return 'no vote button';
    v[0].click(); return 'panel opened';
  })()`);
  console.log(`    ${opened}`);
  await new Promise(r=>setTimeout(r,300));

  console.log('\n=== A. The label carries the Form\'s own words ===');
  const lbl = await ev(`document.querySelector('.panel label').textContent`);
  console.log(`    label: "${lbl}"`);
  check('label matches the form question (minus "Finally")',
    lbl === 'Your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions', lbl);
  check('the field is still present and is a text input',
    await ev(`(function(){var i=document.querySelector('.panel input');return i && i.type==='text'})()`));
  check('label is correctly associated with the input (for/id)',
    await ev(`(function(){var l=document.querySelector('.panel label');return document.getElementById(l.htmlFor)===document.querySelector('.panel input')})()`));

  console.log('\n=== B. 320px at the largest A — nothing rolls outside its box ===');
  const m = await ev(`(function(){
    var p=document.querySelector('.panel');
    var l=document.querySelector('.panel label');
    var i=document.querySelector('.panel input');
    var t=document.querySelector('.panel textarea');
    var s=document.querySelector('.panel .send');
    var pr=p.getBoundingClientRect();
    function within(el){var r=el.getBoundingClientRect();
      return {l:+(r.left-pr.left).toFixed(2), r:+(pr.right-r.right).toFixed(2), w:+r.width.toFixed(2), h:+r.height.toFixed(2)};}
    return {
      docOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      bodyScrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
      panelW: +pr.width.toFixed(2),
      panelRight: +pr.right.toFixed(2),
      label: within(l), input: within(i), textarea: within(t), send: within(s),
      labelLines: Math.round(l.getBoundingClientRect().height / parseFloat(getComputedStyle(l).lineHeight)),
      labelScrollW: l.scrollWidth, labelClientW: l.clientWidth
    };
  })()`);
  console.log('   ', JSON.stringify(m, null, 2).replace(/\n/g,'\n    '));
  check('document does not scroll sideways (overflow 0)', m.docOverflow === 0, 'overflow='+m.docOverflow);
  check('label stays inside the panel (left>=0, right>=0)', m.label.l >= -0.5 && m.label.r >= -0.5, JSON.stringify(m.label));
  check('label does not overflow its own box', m.labelScrollW <= m.labelClientW + 1, `scrollW ${m.labelScrollW} vs clientW ${m.labelClientW}`);
  check('label wraps to several lines rather than one long one', m.labelLines >= 3, 'lines='+m.labelLines);
  check('input stays inside the panel', m.input.l >= -0.5 && m.input.r >= -0.5, JSON.stringify(m.input));
  check('textarea stays inside the panel', m.textarea.l >= -0.5 && m.textarea.r >= -0.5, JSON.stringify(m.textarea));
  check('send button stays inside the panel', m.send.l >= -0.5 && m.send.r >= -0.5, JSON.stringify(m.send));

  console.log('\n=== C. 200% zoom on 320px (160px CSS width) ===');
  await ws.send('Emulation.setDeviceMetricsOverride', {width:160, height:320, deviceScaleFactor:1, mobile:true});
  await new Promise(r=>setTimeout(r,400));
  const z = await ev(`(function(){
    var p=document.querySelector('.panel'); if(!p) return {noPanel:true};
    var l=document.querySelector('.panel label');
    return { docOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
             labelScrollW: l.scrollWidth, labelClientW: l.clientWidth,
             labelInside: +(p.getBoundingClientRect().right - l.getBoundingClientRect().right).toFixed(2) };
  })()`);
  console.log('   ', JSON.stringify(z));
  check('at 200% zoom the document still does not scroll sideways', z.docOverflow === 0, 'overflow='+z.docOverflow);
  check('at 200% zoom the label still does not overflow its box', z.labelScrollW <= z.labelClientW + 1,
        `scrollW ${z.labelScrollW} vs clientW ${z.labelClientW}`);

  console.log('\n=== D. Desktop 1280px ===');
  await ws.send('Emulation.setDeviceMetricsOverride', {width:1280, height:800, deviceScaleFactor:1, mobile:false});
  await new Promise(r=>setTimeout(r,400));
  const d = await ev(`document.documentElement.scrollWidth - document.documentElement.clientWidth`);
  check('desktop 1280px: no sideways scroll', d === 0, 'overflow='+d);

  console.log('\n=== E. Seven characters, six refused — on the rendered panel ===');
  await ws.send('Emulation.setDeviceMetricsOverride', {width:320, height:640, deviceScaleFactor:1, mobile:true});
  await ws.send('Page.navigate', {url:'http://dunchi.test/'});
  await new Promise(r=>setTimeout(r,1500));
  await ev(`(function(){var b=[].slice.call(document.querySelectorAll('button')).filter(function(x){return /Plumber/.test(x.textContent)});b[0].click();return 1})()`);
  await new Promise(r=>setTimeout(r,300));
  await ev(`document.querySelector('button.vote').click()`);
  await new Promise(r=>setTimeout(r,300));
  const six = await ev(`(function(){
    var t=document.querySelector('.panel textarea'), n=document.querySelector('.panel input');
    n.value='Gavin'; t.value='Fix it';
    document.querySelector('.panel .send').click();
    var e=document.querySelector('.panel .fielderr');
    return {panelStillOpen: !!document.querySelector('.panel'), errVisible: e && !e.hidden,
            errText: e?e.textContent:null, typedPreserved: t.value==='Fix it',
            ariaInvalid: t.getAttribute('aria-invalid'),
            errColour: e?getComputedStyle(e).color:null, bodyColour: getComputedStyle(document.body).color};
  })()`);
  console.log('   ', JSON.stringify(six));
  check('six characters REFUSED, panel stays open', six.panelStillOpen && six.errVisible, JSON.stringify(six));
  check('what was typed is preserved', six.typedPreserved);
  check('aria-invalid is set', six.ariaInvalid === 'true');
  check('error colour EQUALS body colour (colour alone carries nothing)',
        six.errColour === six.bodyColour, `${six.errColour} vs ${six.bodyColour}`);
  check('no POST was sent for the refused note', posts.length === 0, JSON.stringify(posts));

  const seven = await ev(`(function(){
    var t=document.querySelector('.panel textarea');
    t.value='Fixed g';
    document.querySelector('.panel .send').click();
    return {panelClosed: !document.querySelector('.panel'), body: document.body.textContent};
  })()`);
  await new Promise(r=>setTimeout(r,400));
  check('seven characters ACCEPTED, panel closes', seven.panelClosed);
  check('exactly one POST was sent', posts.length === 1, JSON.stringify(posts.map(p=>p.body)));
  if (posts.length){
    const body = JSON.parse(posts[0].body);
    console.log('    POST body:', JSON.stringify(body));
    check('POST carries the trader ID, not the name', body.id === 'T001', JSON.stringify(body));
    check('POST carries the villager name', body.name === 'Gavin');
    check('POST carries the words', body.text === 'Fixed g');
    check('POST goes to the recorded /exec endpoint',
      posts[0].url === 'https://script.google.com/macros/s/AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec',
      posts[0].url);
  }

  console.log('\n=== F. The confirmation no longer claims the words go nowhere ===');
  const conf = await ev(`(function(){
    var t=document.querySelector('.thanks'), d=document.querySelector('.todo');
    return {thanks: t?t.textContent:null, todo: d?d.textContent:null};
  })()`);
  console.log('   ', JSON.stringify(conf));
  check('says the recommendation HAS BEEN SENT to the village list',
        /sent to the village list/.test(conf.thanks||''), conf.thanks);
  check('no longer says "until the site is finished"',
        !/until the site is finished/.test((conf.thanks||'')+(conf.todo||'')), conf.todo);
  check('names the five-minute republish lag', /five minutes/.test(conf.todo||''), conf.todo);
  check('does NOT claim it arrived (page cannot know)',
        !/(saved|added to the list|has arrived)/i.test((conf.thanks||'')+(conf.todo||'')), conf.thanks+' | '+conf.todo);

  console.log('\n=== G. Blank name still allowed ===');
  await ws.send('Page.navigate', {url:'http://dunchi.test/'});
  await new Promise(r=>setTimeout(r,1500));
  await ev(`(function(){var b=[].slice.call(document.querySelectorAll('button')).filter(function(x){return /Electrician/.test(x.textContent)});b[0].click();return 1})()`);
  await new Promise(r=>setTimeout(r,300));
  await ev(`document.querySelector('button.vote').click()`);
  await new Promise(r=>setTimeout(r,300));
  await ev(`(function(){var t=document.querySelector('.panel textarea');t.value='Fixed gate';document.querySelector('.panel .send').click();return 1})()`);
  await new Promise(r=>setTimeout(r,400));
  const blank = posts[posts.length-1] ? JSON.parse(posts[posts.length-1].body) : null;
  console.log('    POST body:', JSON.stringify(blank));
  check('a blank name posts "a villager"', blank && blank.name === 'a villager', JSON.stringify(blank));
  check('the field being optional is preserved', blank && blank.text === 'Fixed gate');

  console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
  ws.close();
  process.exit(fail===0?0:1);
})().catch(e => { console.error('ERROR', e); process.exit(2); });
