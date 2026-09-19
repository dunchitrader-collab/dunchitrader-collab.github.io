/* ROW 4.8 — the card must never show words that have not reached the village list.
 *
 * Owner's ruling D5b-6G7f-19092026. Driven in a real browser against the real
 * shipped files, with the feed stubbed and the votes POST answered locally, so
 * nothing touches the owner's sheet.
 *
 * What it proves: after a villager submits, the card shows NOTHING new — no
 * words, no name, no tally — while the thank-you and the five-minute notice
 * are both still there and the recommendation really was sent. The page may
 * say what it did; it may not show what it cannot confirm.
 *
 * HOW TO RUN — Chrome on port 9333 first (see test-three-recommendations.js),
 * then: node scripts/test-card-honesty.js
 */

/* ROW 4.8 in a real browser: after submitting, the card must NOT show the words. */
const { get, WS } = require('./cdp.js');
const fs=require('fs'); const REPO=require('path').resolve(__dirname,'..');
const FEED='id,first_name,last_name,business,phone,trade,extra_trade,status,pub_phone_key,pub_name_key,recommendations,recommended_by\nT001,Duckers,Plumber,Trelawny Plumbing,07825 736940,Plumber,,active,,,,\n';
(async()=>{
  const tgt=await get('http://127.0.0.1:9333/json/new?about:blank','PUT');
  const ws=new WS(tgt.webSocketDebuggerUrl); await ws.ready;
  await ws.send('Page.enable'); await ws.send('Runtime.enable'); await ws.send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  const b64=s=>Buffer.from(s,'utf8').toString('base64'); const posts=[];
  ws.drain=function(){ while(this.buf.length>=2){ const b1=this.buf[0],b2=this.buf[1]; let len=b2&127,off=2;
    if(len===126){if(this.buf.length<4)return;len=this.buf.readUInt16BE(2);off=4;}
    else if(len===127){if(this.buf.length<10)return;len=Number(this.buf.readBigUInt64BE(2));off=10;}
    if(this.buf.length<off+len)return; const p=this.buf.slice(off,off+len).toString('utf8'); this.buf=this.buf.slice(off+len);
    if((b1&0x0f)!==1)continue; let m; try{m=JSON.parse(p)}catch(e){continue}
    if(m.id&&this.pending.has(m.id)){const{resolve,reject}=this.pending.get(m.id);this.pending.delete(m.id);m.error?reject(new Error(JSON.stringify(m.error))):resolve(m.result);}
    else if(m.method==='Fetch.requestPaused'){h(m.params).catch(()=>{});}}};
  async function h(p){ const u=p.request.url,id=p.requestId,pa=u.split('?')[0];
    const r=(b,t)=>ws.send('Fetch.fulfillRequest',{requestId:id,responseCode:200,responseHeaders:[{name:'Content-Type',value:t},{name:'Access-Control-Allow-Origin',value:'*'}],body:b64(b)});
    if(u.includes('/pub?')&&u.includes('output=csv'))return r(FEED,'text/csv');
    if(u.includes('script.google.com')){posts.push(p.request.postData||'');return r('{"ok":true}','application/json');}
    if(pa==='http://dvs.test/')return r(fs.readFileSync(REPO+'/index.html','utf8'),'text/html');
    if(pa==='http://dvs.test/app.js')return r(fs.readFileSync(REPO+'/app.js','utf8'),'text/javascript');
    if(pa==='http://dvs.test/style.css')return r(fs.readFileSync(REPO+'/style.css','utf8'),'text/css');
    return ws.send('Fetch.failRequest',{requestId:id,errorReason:'BlockedByClient'});}
  const ev=async e=>{const r=await ws.send('Runtime.evaluate',{expression:e,returnByValue:true,awaitPromise:true});
    if(r.exceptionDetails)throw new Error(JSON.stringify(r.exceptionDetails.exception)); return r.result.value;};
  let pass=0,fail=0; const ck=(l,c,d)=>{c?(pass++,console.log('  PASS  '+l)):(fail++,console.log('  FAIL  '+l+(d?'  — '+d:'')));};

  await ws.send('Emulation.setDeviceMetricsOverride',{width:320,height:640,deviceScaleFactor:1,mobile:true});
  await ws.send('Page.navigate',{url:'http://dvs.test/?t='+Date.now()});
  await new Promise(r=>setTimeout(r,1400));
  await ev(`(function(){var b=[].slice.call(document.querySelectorAll('button')).filter(x=>/Plumber/.test(x.textContent));b[0].click();return 1})()`);
  await new Promise(r=>setTimeout(r,300));
  const before = await ev(`(function(){var c=document.querySelector('.card');return {tally:!!c.querySelector('.tally'), text:c.textContent.indexOf('MY SECRET WORDS')>=0}})()`);
  ck('before submitting: no tally, no words', !before.tally && !before.text);

  await ev(`document.querySelector('button.vote').click()`);
  await new Promise(r=>setTimeout(r,300));
  await ev(`(function(){document.querySelector('.panel input').value='Gavin';document.querySelector('.panel textarea').value='MY SECRET WORDS here';document.querySelector('.panel .send').click();return 1})()`);
  await new Promise(r=>setTimeout(r,600));

  const after = await ev(`(function(){var c=document.querySelector('.card');return {
      cardShowsWords: c.textContent.indexOf('MY SECRET WORDS')>=0,
      cardShowsName: c.textContent.indexOf('Recommended by Gavin')>=0,
      tally: c.querySelector('.tally')?c.querySelector('.tally').textContent:null,
      thanks: c.querySelector('.thanks')?c.querySelector('.thanks').textContent:null,
      notice: c.querySelector('.todo')?c.querySelector('.todo').textContent:null };})()`);
  console.log('   ', JSON.stringify(after));
  ck('AFTER submitting: the card does NOT show the words', !after.cardShowsWords);
  ck('AFTER submitting: the card does NOT show the name',  !after.cardShowsName);
  ck('AFTER submitting: no tally appeared',                after.tally===null, String(after.tally));
  ck('the thank-you message IS shown',   /sent to the village list/.test(after.thanks||''), after.thanks);
  ck('the five-minute notice IS shown',  /five minutes/.test(after.notice||''), after.notice);
  ck('the recommendation WAS actually sent', posts.length===1, JSON.stringify(posts));
  if(posts.length){const b=JSON.parse(posts[0]); ck('sent with the right words and name', b.text==='MY SECRET WORDS here' && b.name==='Gavin', posts[0]);}
  console.log(`\n================  ${pass} passed, ${fail} failed  ================\n`);
  ws.close(); process.exit(fail?1:0);
})().catch(e=>{console.error('ERROR',e.message);process.exit(2)});
