/* ROW 6.4 - the add-someone link must open in a new tab, checked on the LIVE site.
 * Owner: "once you actually submit details for a trader it's very hard to get
 * back to the original site because you're on the Google form".
 * Chrome on 9333 first; then: node scripts/test-form-link.js
 */
const { get, WS } = require('./cdp.js');
(async()=>{
  const tgt=await get('http://127.0.0.1:9333/json/new?about:blank','PUT');
  const ws=new WS(tgt.webSocketDebuggerUrl); await ws.ready;
  await ws.send('Page.enable'); await ws.send('Runtime.enable');
  const ev=async e=>{const r=await ws.send('Runtime.evaluate',{expression:e,returnByValue:true,awaitPromise:true});
    if(r.exceptionDetails)throw new Error(JSON.stringify(r.exceptionDetails.exception)); return r.result.value;};
  await ws.send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await ws.send('Page.navigate',{url:'https://dunchitrader-collab.github.io/?r64='+Date.now()});
  await new Promise(r=>setTimeout(r,4000));
  const link = await ev(`(function(){var a=document.querySelector('a.add');return a?{
      text:a.textContent.trim(), href:a.getAttribute('href'),
      target:a.getAttribute('target'), rel:a.getAttribute('rel')}:null})()`);
  console.log('ROW 6.4 ON THE LIVE SITE:');
  console.log('  ', JSON.stringify(link,null,2).replace(/\n/g,'\n  '));
  let pass=0,fail=0; const ck=(l,c)=>{c?(pass++,console.log('  PASS  '+l)):(fail++,console.log('  FAIL  '+l));};
  ck('the add link exists', !!link);
  ck('it opens in a new tab (target=_blank)', link && link.target==='_blank');
  ck('it carries rel=noopener', link && /noopener/.test(link.rel||''));
  ck('the form URL is unchanged', link && link.href==='https://forms.gle/ZyLed4Tue91bzXjD7');
  ck('the label is unchanged', link && link.text==='Recommend a trader');
  console.log(`\n  ${pass} passed, ${fail} failed`);
  ws.close(); process.exit(fail?1:0);
})().catch(e=>{console.error('ERROR',e.message);process.exit(2)});
