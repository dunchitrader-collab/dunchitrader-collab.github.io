/* A minimal, dependency-free Chrome DevTools Protocol client.
 *
 * Enough of the protocol to open a page, set a mobile viewport, intercept and
 * fulfil requests, and evaluate JavaScript. Written for this project because
 * the site has NO BUILD STEP and no node_modules, and adding puppeteer to prove
 * a CSS rule would be a heavier dependency than the site itself.
 *
 * Used by scripts/test-panel-browser.js. See that file for how to run it.
 */

/* Minimal Chrome DevTools Protocol client — no dependencies.
   Enough to open a page, set a mobile viewport, evaluate JS and read back. */
const http = require('http');
const crypto = require('crypto');
const net = require('net');

function get(url, method){
  const u = new URL(url);
  return new Promise((res, rej) => {
    const req = http.request({hostname:u.hostname, port:u.port, path:u.pathname+u.search,
                              method: method || 'GET'}, r => {
      let d=''; r.on('data',c=>d+=c); r.on('end',()=>res(JSON.parse(d)));
    });
    req.on('error', rej); req.end();
  });
}

class WS {
  constructor(url){
    const u = new URL(url);
    this.id = 0; this.pending = new Map(); this.buf = Buffer.alloc(0);
    this.ready = new Promise((resolve, reject) => {
      const key = crypto.randomBytes(16).toString('base64');
      this.sock = net.connect(Number(u.port), u.hostname, () => {
        this.sock.write(
          `GET ${u.pathname}${u.search} HTTP/1.1\r\nHost: ${u.host}\r\n` +
          `Upgrade: websocket\r\nConnection: Upgrade\r\n` +
          `Sec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\n\r\n`);
      });
      this.sock.on('error', reject);
      let handshook = false;
      this.sock.on('data', chunk => {
        if (!handshook){
          const s = chunk.toString('latin1');
          const i = s.indexOf('\r\n\r\n');
          if (i === -1) return;
          handshook = true; resolve();
          chunk = chunk.slice(Buffer.byteLength(s.slice(0, i+4), 'latin1'));
          if (!chunk.length) return;
        }
        this.buf = Buffer.concat([this.buf, chunk]);
        this.drain();
      });
    });
  }
  drain(){
    while (this.buf.length >= 2){
      const b1 = this.buf[0], b2 = this.buf[1];
      let len = b2 & 127, off = 2;
      if (len === 126){ if (this.buf.length < 4) return; len = this.buf.readUInt16BE(2); off = 4; }
      else if (len === 127){ if (this.buf.length < 10) return; len = Number(this.buf.readBigUInt64BE(2)); off = 10; }
      if (this.buf.length < off + len) return;
      const payload = this.buf.slice(off, off+len).toString('utf8');
      this.buf = this.buf.slice(off+len);
      if ((b1 & 0x0f) === 1){
        let msg; try { msg = JSON.parse(payload); } catch(e){ continue; }
        if (msg.id && this.pending.has(msg.id)){
          const {resolve, reject} = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
        }
      }
    }
  }
  frame(text){
    const p = Buffer.from(text, 'utf8');
    const mask = crypto.randomBytes(4);
    let head;
    if (p.length < 126) head = Buffer.from([0x81, 0x80 | p.length]);
    else if (p.length < 65536){ head = Buffer.alloc(4); head[0]=0x81; head[1]=0xFE; head.writeUInt16BE(p.length,2); }
    else { head = Buffer.alloc(10); head[0]=0x81; head[1]=0xFF; head.writeBigUInt64BE(BigInt(p.length),2); }
    const masked = Buffer.alloc(p.length);
    for (let i=0;i<p.length;i++) masked[i] = p[i] ^ mask[i%4];
    return Buffer.concat([head, mask, masked]);
  }
  send(method, params){
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, {resolve, reject});
      this.sock.write(this.frame(JSON.stringify({id, method, params: params||{}})));
    });
  }
  close(){ try{ this.sock.destroy(); }catch(e){} }
}

module.exports = { get, WS };
