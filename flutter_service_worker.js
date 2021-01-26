'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e592b7a23ab77ff8f49ea37091642eb",
".git/config": "e44822a2c963d823130c011b27f7b412",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c8692f18c601ea225225e8241f04dad8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7688bbd5fc1f8365fe3546c56cb48c90",
".git/logs/refs/heads/master": "7688bbd5fc1f8365fe3546c56cb48c90",
".git/logs/refs/remotes/origin/master": "8f6bf6f1012b84c4c98b99798eb8e6d4",
".git/objects/01/5669d3a66199fdb06dfd5ca14e9c358e8151ed": "d39101385c655e242396ffb4585dbefb",
".git/objects/03/6d983f4d3382e38825383387193d7db2a71b17": "7d140c616509e04010cf2ddac59ce178",
".git/objects/07/095218731dcd1bb4f9c758ee173665000d3108": "5991dfa512771a5d0a286341b607bc8c",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/objects/1c/c81a58ebcc3ee3208261fbd0326f1909be1b81": "20374e1da2b5ed77231ba1517bcc25ce",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/2b180ffdab29af6ed0e9bd801a53b989d8ae87": "8697bb0794d74cb3246384884d720ab8",
".git/objects/4d/19bc2613e1da4bf31ad538b21a61d6d387b513": "56b49b2ba0c2da87e2d15d783e15d5e7",
".git/objects/52/a8c7931e973c24b7ef69ee80cfec0aa592ea60": "278e52c449ced37fff491facead0c153",
".git/objects/5b/d1169187de4721e33d4d08fd3b0da7b3966d2f": "1b445a1a9772f16e80015ac9ec952fa2",
".git/objects/66/61bffa806f2bfe2e018dda9cd3759c836cd378": "51fd34a9ba30c302b6e1724e4522f9a2",
".git/objects/68/f6b8971f154fbbafd6bde054cfb3417720897f": "f0b54224a32a525a23edfa40ae39c521",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/0fdf91e22ce561a4e50dc0dd6c565d05263cab": "23815a6109683feccb422fc3f4661023",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/ffdd271356d68a0c56727a2d6aa9919364cfa1": "78cf9696db3e0379f146537d5f12486b",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/9c/c8ece211a8c12ea8269929c6f5c55c0eb30927": "bc77203d97ce80b7fbdf492ae3d89136",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/245c21bf30568ceca423403697b088e7197471": "f13c40c6918910384a37eae5aef37e5e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/3c4046617e4741aa9966cbc8dbdcfafc093900": "816794e475bcbf8a8b58b830ff4bab36",
".git/objects/c8/1a8944865614dabb6cb6cfac548a136acde471": "6d52036d4909e52679568cd5935dbe4e",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d8/1258c500916d08e7fad78cf72661a2061adaf7": "06f8c86dccf2cdb3e0c22c4575380042",
".git/objects/dd/70eb4d27659552abe02a9ba83136f66ae9fa58": "fada72a3b75e62343cb37cb6aba6993e",
".git/objects/e2/182733c6d8a07eeef8a020ffd3bdcbd29b80c6": "0fcb658ca4d98adedcff1e5b115b1a1e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ac3cc4938b2b0786f644513eba70b00add15fa": "dd32fa468caa61591e3d825694ae4710",
".git/objects/f1/510475a2caaec85cb0bbd0e97f13cfbaaa034d": "76496dca4c34672b5ddf07f1ba3086f7",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/refs/heads/master": "826ad4247c20c0f8c780b2d4bf7d392d",
".git/refs/remotes/origin/master": "826ad4247c20c0f8c780b2d4bf7d392d",
"assets/AssetManifest.json": "65b1b56be9a2fe91543a39a1dd96e954",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "5e3b607281e71ade45840e74b2f4b85f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "126016d948bf13871abc88f415e3a377",
"/": "126016d948bf13871abc88f415e3a377",
"main.dart.js": "23592cd324d03c5c1649d321439848e2",
"manifest.json": "c75ffa6c509d4d1524ebec5eabeaf7f3",
"version.json": "ece32d51651d2df83abb410e57178067"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
