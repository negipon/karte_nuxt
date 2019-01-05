importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/005336c62edf171bf6a0.js",
    "revision": "6dde6f19364c4b0fc56964fb56d73f8d"
  },
  {
    "url": "/_nuxt/007cc1c61420bbb25f5a.js",
    "revision": "cb348fb309f77215e7cc61ceed296b09"
  },
  {
    "url": "/_nuxt/357038464303aa3977cd.js",
    "revision": "d2c4de23294e5706f56125a44c4e9943"
  },
  {
    "url": "/_nuxt/38f7bb820f35abca5d8a.js",
    "revision": "67fc0163816fb59750664f40631896dc"
  },
  {
    "url": "/_nuxt/74b4f0a9da411ef57a11.js",
    "revision": "7cb30951d4665fb2b0a3eca5888afa38"
  },
  {
    "url": "/_nuxt/809d8c9b23eb2743c092.js",
    "revision": "974e67a59596c02d9e5d9b315fe64457"
  },
  {
    "url": "/_nuxt/97a16bd6efac7277a83f.js",
    "revision": "d89a8f409998c2b46f5e31e82c61542c"
  },
  {
    "url": "/_nuxt/ee2a9479c6c876531f33.js",
    "revision": "a0053d2e420684b7178693ca7bd6ad9e"
  }
], {
  "cacheId": "karte_nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
