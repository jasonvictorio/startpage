importScripts('/startpage/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "startpage",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/startpage/_nuxt/app.3675558458ea29607cfde69e564146b5.css",
    "revision": "3675558458ea29607cfde69e564146b5"
  },
  {
    "url": "/startpage/_nuxt/app.d829d59b26f404a93f9d.js",
    "revision": "5325a9832ac1e7db09195693091eb746"
  },
  {
    "url": "/startpage/_nuxt/layouts/default.f93e57196b8d98e99eaf.js",
    "revision": "3de802e1c1fe021052ede3211f22b9aa"
  },
  {
    "url": "/startpage/_nuxt/manifest.0ceb0e23a1ea80326c10.js",
    "revision": "cd1a3218065346b183e6b15b8a8a2d11"
  },
  {
    "url": "/startpage/_nuxt/pages/index.8a02df81b344d0ebff11.js",
    "revision": "5221d9ef82bbcea10dbe3d85efbc6add"
  },
  {
    "url": "/startpage/_nuxt/vendor.0d94eadc322945bd229e.js",
    "revision": "761d6fb53ef859ad2831414650194742"
  }
])


workboxSW.router.registerRoute(new RegExp('/startpage/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/startpage/.*'), workboxSW.strategies.networkFirst({}), 'GET')

