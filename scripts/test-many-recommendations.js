/* SIX RECOMMENDATIONS ON ONE CARD — measured in a real browser.
 *
 * Build plan rows 4.8 and 4.10. 4.8 asked that a card stay readable with three
 * recommendations; 4.10 removed the expander that was hiding them, so this now
 * measures SIX, all rendered, which is what a villager actually meets.
 *
 * NOTE ON THE EARLIER NUMBERS: the three-recommendation run of 2026-09-19
 * midday was taken while `SHOWN = 2` was still in app.js, so the card it
 * measured was showing TWO recommendations and a button. Those figures were
 * unrepresentative and are superseded by this file. The Requirement as stated
 * forbids text rolling outside its box at any zoom and demands the site stay
 * quick and simple for an older audience, so this measures both — overflow,
 * and how far the two buttons that matter sit from the top of the card.
 *
 * It also carries 0- and 1-recommendation baselines at the same text size, so
 * the cost of the third recommendation is attributable rather than guessed.
 *
 * The Google feed is stubbed from a fixture and the votes POST is answered
 * locally, so this never reads or writes the owner's sheet.
 *
 * HOW TO RUN — start Chrome with remote debugging first:
 *   ~/.cache/puppeteer/chrome/linux-*\/chrome-linux64/chrome --headless=new \
 *     --disable-gpu --no-sandbox --remote-debugging-port=9333 \
 *     --user-data-dir=/tmp/dvs-chrome about:blank &
 *   node scripts/test-three-recommendations.js
 */

/* SIX RECOMMENDATIONS ON ONE CARD — measured, not assumed.
   Build plan row 4.8's readability clause. Feed stubbed, POST blocked. */
const { get, WS } = require('./cdp.js');
const fs=require('fs');
const REPO=require('path').resolve(__dirname,'..');

let FEED = fs.readFileSync(__dirname + '/fixture-six-recommendations.csv','utf8');

(async()=>{
  const tgt=await get('http://127.0.0.1:9333/json/new?about:blank','PUT');
  const ws=new WS(tgt.webSocketDebuggerUrl); await ws.ready;
  await ws.send('Page.enable'); await ws.send('Runtime.enable'); await ws.send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  const b64=s=>Buffer.from(s,'utf8').toString('base64');
  ws.drain=function(){ while(this.buf.length>=2){ const b1=this.buf[0],b2=this.buf[1]; let len=b2&127,off=2;
    if(len===126){if(this.buf.length<4)return;len=this.buf.readUInt16BE(2);off=4;}
    else if(len===127){if(this.buf.length<10)return;len=Number(this.buf.readBigUInt64BE(2));off=10;}
    if(this.buf.length<off+len)return; const p=this.buf.slice(off,off+len).toString('utf8'); this.buf=this.buf.slice(off+len);
    if((b1&0x0f)!==1)continue; let m; try{m=JSON.parse(p)}catch(e){continue}
    if(m.id&&this.pending.has(m.id)){const{resolve,reject}=this.pending.get(m.id);this.pending.delete(m.id);m.error?reject(new Error(JSON.stringify(m.error))):resolve(m.result);}
    else if(m.method==='Fetch.requestPaused'){h(m.params).catch(()=>{});}}};
  async function h(p){ const u=p.request.url,id=p.requestId;
    const r=(b,t)=>ws.send('Fetch.fulfillRequest',{requestId:id,responseCode:200,responseHeaders:[{name:'Content-Type',value:t},{name:'Access-Control-Allow-Origin',value:'*'}],body:b64(b)});
    if(u.includes('/pub?')&&u.includes('output=csv'))return r(FEED,'text/csv');
    if(u.includes('script.google.com'))return r('{"ok":true}','application/json');
    const pathOnly = u.split('?')[0];
    if(pathOnly==='http://dvs.test/')return r(fs.readFileSync(REPO+'/index.html','utf8'),'text/html');
    if(pathOnly==='http://dvs.test/app.js')return r(fs.readFileSync(REPO+'/app.js','utf8'),'text/javascript');
    if(pathOnly==='http://dvs.test/style.css')return r(fs.readFileSync(REPO+'/style.css','utf8'),'text/css');
    return ws.send('Fetch.failRequest',{requestId:id,errorReason:'BlockedByClient'});}
  const ev=async e=>{const r=await ws.send('Runtime.evaluate',{expression:e,returnByValue:true,awaitPromise:true});
    if(r.exceptionDetails)throw new Error(JSON.stringify(r.exceptionDetails.exception)); return r.result.value;};

  async function scenario(w,hh,size,label){
    await ws.send('Emulation.setDeviceMetricsOverride',{width:w,height:hh,deviceScaleFactor:1,mobile:w<600});
    await ws.send('Page.navigate',{url:'http://dvs.test/?t='+Date.now()});
    await new Promise(r=>setTimeout(r,1400));
    const probe = await ev(`JSON.stringify({sizer:document.querySelectorAll('.sizer button').length, body:document.body.textContent.slice(0,200)})`);
    if(label.indexOf('largest')>=0) console.log('    PROBE:', probe);
    if(size!==null) await ev(`(function(){var b=document.querySelectorAll('.sizer button'); if(b[${size}]) b[${size}].click(); return b.length})()`);
    await new Promise(r=>setTimeout(r,250));
    const st = await ev(`JSON.stringify({buttons:[].slice.call(document.querySelectorAll('button')).map(b=>b.textContent.trim().slice(0,30)), body:document.body.textContent.slice(0,220)})`);
    console.log('    STATE:', st);
    await ev(`(function(){var b=[].slice.call(document.querySelectorAll('button')).filter(x=>/Plumber/.test(x.textContent)); if(b[0]) b[0].click(); return b.length})()`);
    await new Promise(r=>setTimeout(r,350));
    const m = await ev(`(function(){
      var c=document.querySelector('.card'); if(!c) return {noCard:true, body:document.body.textContent.slice(0,120)};
      var call=c.querySelector('.call'), vote=c.querySelector('button.vote');
      var recs=c.querySelectorAll('.rec, .why, .said');
      var tally=c.querySelector('.tally');
      var de=document.documentElement;
      function over(el){ return el.scrollWidth > el.clientWidth + 1; }
      var overflowing=[];
      c.querySelectorAll('*').forEach(function(el){ if(over(el)) overflowing.push(el.className||el.tagName); });
      return {
        docOverflow: de.scrollWidth-de.clientWidth,
        viewportH: window.innerHeight,
        cardH: Math.round(c.getBoundingClientRect().height),
        callTop: Math.round(call.getBoundingClientRect().top),
        callBelowFold: call.getBoundingClientRect().top > window.innerHeight,
        voteTop: vote?Math.round(vote.getBoundingClientRect().top):null,
        voteBelowFold: vote? vote.getBoundingClientRect().top > window.innerHeight : null,
        scrollToVote: vote?Math.max(0,Math.round(vote.getBoundingClientRect().bottom-window.innerHeight)):null,
        tally: tally?tally.textContent:null,
        recCount: recs.length,
        overflowing: overflowing,
        names: [].slice.call(c.querySelectorAll('.by')).map(function(e){return e.textContent})
      };})()`);
    console.log(`\n--- ${label} ---`);
    console.log('   ', JSON.stringify(m,null,2).replace(/\n/g,'\n    '));
    return m;
  }

  // Baseline: the SAME card with ONE recommendation, so the cost of three is attributable.
  const one = fs.readFileSync(__dirname+'/fixture-six-recommendations.csv','utf8').split('\n');
  fs.writeFileSync(__dirname+'/.tmp-feed-one.csv',
    one[0]+'\n'+'T001,Duckers,Plumber,Trelawny Plumbing,07825 736940,Plumber,,active,,,"Sorted the leak in the kitchen fast and tidied up after himself",Helen\n');
  fs.writeFileSync(__dirname+'/.tmp-feed-none.csv', one[0]+'\n'+'T001,Duckers,Plumber,Trelawny Plumbing,07825 736940,Plumber,,active,,,,\n');

  const a = await scenario(320,640,2,'320px phone, LARGEST text size');
  const b = await scenario(160,320,2,'200% zoom on a 320px phone (160 CSS px)');
  const c = await scenario(320,640,0,'320px phone, normal text size');
  const d = await scenario(1280,800,0,'desktop 1280px');

  console.log('\n================ SUMMARY ================');
  [['320px largest A',a],['200% zoom',b],['320px normal',c],['desktop',d]].forEach(([n,m])=>{
    console.log(`  ${n.padEnd(20)} docOverflow=${m.docOverflow}  overflowingEls=${m.overflowing.length}  cardH=${m.cardH}px  callTop=${m.callTop}  voteTop=${m.voteTop}  scrollToVote=${m.scrollToVote}`);
  });
  console.log('\n=== BASELINES at 320px largest A — what does the THIRD recommendation cost? ===');
  FEED = fs.readFileSync(__dirname+'/.tmp-feed-none.csv','utf8');
  const z = await scenario(320,640,2,'320px largest A — NO recommendations');
  FEED = fs.readFileSync(__dirname+'/.tmp-feed-one.csv','utf8');
  const o = await scenario(320,640,2,'320px largest A — ONE recommendation');
  console.log('\n  THE NUMBER THAT MATTERS IS callTop: it must not move as recommendations are added,');
  console.log('  because they render BELOW the Call button. If it ever does move, raise it.\n');
  console.log('  recs   cardH   callTop   voteTop   scrollToVote');
  [['0',z],['1',o],['6',a]].forEach(([n,m])=>
    console.log(`   ${n}     ${String(m.cardH).padEnd(7)} ${String(m.callTop).padEnd(9)} ${String(m.voteTop).padEnd(9)} ${m.scrollToVote}`));
  // Tidy the two temporary baseline fixtures away.
  try { fs.unlinkSync(__dirname+'/.tmp-feed-one.csv'); fs.unlinkSync(__dirname+'/.tmp-feed-none.csv'); } catch(e){}
  ws.close(); process.exit(0);
})().catch(e=>{console.error('ERROR',e.message);process.exit(2)});
