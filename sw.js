if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const f=e=>s(e,n),a={module:{uri:n},exports:c,require:f};i[n]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(o(...e),c)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-47f4c93c.js",revision:null},{url:"index.html",revision:"eef0fa855ad082b15eb444fec64da404"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"manifest.webmanifest",revision:"7cebcab462902622c00f3952aacffa27"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"manifest.webmanifest",revision:"7cebcab462902622c00f3952aacffa27"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));