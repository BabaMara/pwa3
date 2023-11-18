/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d933e9fc'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/AboutView-f5c2e0bb.js",
    "revision": null
  }, {
    "url": "assets/index-789ed9c5.css",
    "revision": null
  }, {
    "url": "assets/index-e640cf15.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView-45029741.js",
    "revision": null
  }, {
    "url": "css/all.min.css",
    "revision": "3d5ef2bf867c4054a2f336cdbad9e1dc"
  }, {
    "url": "index.html",
    "revision": "501b625aa1ce2c58a4e9bab973f2d196"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "4b766d6a0fbc5e11b0cb20406ec25da3"
  }, {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "a5dc3e40b7d4a098514649aca38b5c17"
  }, {
    "url": "css/all.min.css",
    "revision": "3d5ef2bf867c4054a2f336cdbad9e1dc"
  }, {
    "url": "images/employees.jpg",
    "revision": "183434f7da5cfd90317e11dbaa2f88c2"
  }, {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "f34b6a2a94e1a01e4c21fa84dcbf6667"
  }, {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "ee91e640b5449fb98d9320c877a9866e"
  }, {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "65e80529f5cfcf16a4b1161601a1616c"
  }, {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "82bafee9dcc7b6fb7bca7ed323f9b7ae"
  }, {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "52afeb7a328694838c6b073ad7af24d8"
  }, {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "57b380d27f14f16e737bcca7e849cf79"
  }, {
    "url": "webfonts/fa-v4compatibility.ttf",
    "revision": "9d6f359a328ee3df73709c1d8f05b0d4"
  }, {
    "url": "webfonts/fa-v4compatibility.woff2",
    "revision": "43044320c62b2b1397b8a0d535dea6a7"
  }, {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "7d04eeaa039fc33f7c7a66ca4504e942"
  }, {
    "url": "images/icons/favicon-16x16.png",
    "revision": "2b62ddf28c81d02091c781d49c140edf"
  }, {
    "url": "images/icons/favicon-32x32.png",
    "revision": "bcf1c0d52816e0e97b90f6c58640fd2c"
  }, {
    "url": "images/icons/favicon.ico",
    "revision": "4145074980e12a2d7706f5c8a882bf8c"
  }, {
    "url": "images/icons/mstile-144x144.png",
    "revision": "843f59017696e967c5a940e2a2535abf"
  }, {
    "url": "images/icons/mstile-150x150.png",
    "revision": "aeb6cd1f03a135a0e6f28139604199a7"
  }, {
    "url": "images/icons/mstile-310x150.png",
    "revision": "b35524c634dc403494eef6232153bb74"
  }, {
    "url": "images/icons/mstile-310x310.png",
    "revision": "4f3f0341fc866b0c029bbf5193a36cb3"
  }, {
    "url": "images/icons/mstile-70x70.png",
    "revision": "78885a9f69104fc8bc690520e86a5e3a"
  }, {
    "url": "fonts/Montserrat/Montserrat-Regular.ttf",
    "revision": "34de1239b12123b85ff1a68b58835a1f"
  }, {
    "url": "images/portraits/men/20.jpg",
    "revision": "a0be1a993631c9b7dda764292d569b0c"
  }, {
    "url": "images/portraits/men/22.jpg",
    "revision": "01cdff25c2a2ba9787f028100d67c616"
  }, {
    "url": "images/portraits/men/27.jpg",
    "revision": "8c26abcfe0a9f720b09cd6cd08768382"
  }, {
    "url": "images/portraits/men/37.jpg",
    "revision": "7f60a6f670c814fd0b69ae9f2f683155"
  }, {
    "url": "images/portraits/men/41.jpg",
    "revision": "d60a6c4af51cee31a8290c9627fcd5de"
  }, {
    "url": "images/portraits/men/59.jpg",
    "revision": "6026f01f4d14835d37beaf12378eb626"
  }, {
    "url": "images/portraits/men/v3_0230030.jpg",
    "revision": "0b0579822072ec40f8ed196b48efdbbc"
  }, {
    "url": "images/portraits/women/0.jpg",
    "revision": "a45108aaa670b87e4bc6b9c007ce4e8e"
  }, {
    "url": "images/portraits/women/26.jpg",
    "revision": "9aff08fdcf267c80f216abfad78a3f75"
  }, {
    "url": "images/portraits/women/36.jpg",
    "revision": "01c9cccd00dbbd2d17c09ae1475c7950"
  }, {
    "url": "images/portraits/women/37.jpg",
    "revision": "672b6807a0bfc7fb0161e6bdad0bb2b4"
  }, {
    "url": "images/portraits/women/46.jpg",
    "revision": "2a788efb7881ed9a139531bc984d7e8c"
  }, {
    "url": "images/portraits/women/5.jpg",
    "revision": "38e2bbc24eb87b6d27f48e91e1f6e86e"
  }, {
    "url": "images/portraits/women/52.jpg",
    "revision": "e0b000b80ab45921c80b06cba0af87f1"
  }, {
    "url": "images/portraits/women/59.jpg",
    "revision": "a7e17c03690db97ca8456f0b705ffcd5"
  }, {
    "url": "images/portraits/women/61.jpg",
    "revision": "5b9411d9916115f8636364ce09b5b51e"
  }, {
    "url": "images/portraits/women/70.jpg",
    "revision": "1d586b518a3c81aaa0799b1088efce8a"
  }, {
    "url": "images/portraits/women/71.jpg",
    "revision": "d973b1db2a74fdc65a2fbcef02984891"
  }, {
    "url": "images/portraits/women/72.jpg",
    "revision": "8419780f236e0cd871e5fd6531a6ea44"
  }, {
    "url": "images/portraits/women/88.jpg",
    "revision": "e39d7bdf6d0273d2db471df20309dbf4"
  }, {
    "url": "manifest.webmanifest",
    "revision": "09fdc3bc27ef274a18304014878010e2"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/.*images\/portraits\/*.*.jpg/, new workbox.CacheFirst({
    "cacheName": "ilic-images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 86400
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute("/employees", new workbox.NetworkFirst({
    "cacheName": "ilic-employees",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 86400
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
