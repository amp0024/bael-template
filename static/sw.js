importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bael-cms-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/0ea286ecc44b505b0e21.css",
    "revision": "0a4a966032cf25eaab13385ce1787ee5"
  },
  {
    "url": "/_nuxt/12d11382fe00a7002013.js",
    "revision": "03f3254d65b5a6b89680fdfb6870363b"
  },
  {
    "url": "/_nuxt/1e4df581b13259637c95.js",
    "revision": "aa02b32a629db0c0bcc8e22a0e7634b0"
  },
  {
    "url": "/_nuxt/21f4f25e34c21bd95c0a.css",
    "revision": "d80d29ae226147102a95186a363dc0a3"
  },
  {
    "url": "/_nuxt/228a7e1aa34b44fa65d5.js",
    "revision": "f44bd943fecb5d7876219faffe29e882"
  },
  {
    "url": "/_nuxt/2a40e9bac6bdc27ad705.js",
    "revision": "7e808a117f2d07fb37a3fe6866585381"
  },
  {
    "url": "/_nuxt/31880eae7706b22113a0.js",
    "revision": "ec17bdb7afcd5cf06b1c6891ec9cf5e3"
  },
  {
    "url": "/_nuxt/37fc1ae51fe371c4305f.css",
    "revision": "4eac1273a15402cf0960d556017ad805"
  },
  {
    "url": "/_nuxt/619decdf6b482b849b9b.js",
    "revision": "0c4c020b8fa8e49805d8e2e0e9394077"
  },
  {
    "url": "/_nuxt/69cdbb6f83ac39977c4a.css",
    "revision": "0a4a966032cf25eaab13385ce1787ee5"
  },
  {
    "url": "/_nuxt/6a7c6fbe92068c0cc314.css",
    "revision": "0a4a966032cf25eaab13385ce1787ee5"
  },
  {
    "url": "/_nuxt/6b2d372c1812ce309eae.css",
    "revision": "cfef01e8b2f16b0f478ba50c66f231b2"
  },
  {
    "url": "/_nuxt/794a05cd7803dbd74be6.js",
    "revision": "b9cf817b7cdda23d8efd4e469129054a"
  },
  {
    "url": "/_nuxt/8620f4e5e0e1c4132a99.js",
    "revision": "e4b63882652c7938f069e5c191417b56"
  },
  {
    "url": "/_nuxt/d8d123cba69862eaaf89.js",
    "revision": "54feec7eab647177a4bbfd6c27fffc99"
  },
  {
    "url": "/_nuxt/dbda71d16e3541f5e0d2.js",
    "revision": "38a5c167ae61ff7de6b450a2d38d898e"
  },
  {
    "url": "/_nuxt/f5ac30eb7cff1721a182.css",
    "revision": "0a4a966032cf25eaab13385ce1787ee5"
  },
  {
    "url": "/_nuxt/fdcf51da89613d3571ec.js",
    "revision": "26479a57c1691ca5332c06a6c9fe4dfe"
  },
  {
    "url": "/_nuxt/ff94613e6c776c14bd0c.css",
    "revision": "0a4a966032cf25eaab13385ce1787ee5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/images/uploads/.*'), workboxSW.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')

