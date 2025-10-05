'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"68c67ca77a525019301d2af5.glb": "75cd85834d558a2a5132446df4801e26",
"assets/AssetManifest.bin": "4cedb52e70c7ebf7ec9cbcb5658768ea",
"assets/AssetManifest.bin.json": "e991c924836127b2d8150c355cfecf2f",
"assets/AssetManifest.json": "d5dc25b30b0a3f60155eace9460995b4",
"assets/assets/68c67ca77a525019301d2af5.glb": "75cd85834d558a2a5132446df4801e26",
"assets/assets/Avatar/68c67ca77a525019301d2af5.glb": "75cd85834d558a2a5132446df4801e26",
"assets/assets/cibles.html": "a9851c358517ecd2b78815b0d20bf4d2",
"assets/assets/grades.json": "1ed9c0571d645fb8eab25afa9eb8fa00",
"assets/assets/images/cible.png": "bd7b637f24ac64f88b1028b2770a8b5d",
"assets/assets/images/cible_1.png": "82265eb12dbce5d3f7de175b91bb859c",
"assets/assets/images/cible_centre.png": "a03662a6f0ab8e4840cb889e5054ba68",
"assets/assets/images/cible_zone.png": "6fa58419e0ba3800f7f590ab56f9c60d",
"assets/assets/images/grades/elite_1.png": "623a4c09fcabde16c5ec4803fc60c93b",
"assets/assets/images/grades/elite_2.png": "f585239424edbdfd5a274042b3f1901c",
"assets/assets/images/grades/elite_3.png": "e8ae69cb20663f99eb2a9f739c4d98ff",
"assets/assets/images/grades/epique_1.png": "3194d3ca33e50bd74d127f9f9c14f23e",
"assets/assets/images/grades/epique_2.png": "888ab6a5682cf998ed389af988cb7625",
"assets/assets/images/grades/epique_3.png": "21dec9e118f2beaefb0d4f01215cc699",
"assets/assets/images/grades/epique_4.png": "d64c21f21c47fc3b76ff782e493ba76a",
"assets/assets/images/grades/epique_5.png": "1aa103e61e868be47ce30789da6d5a85",
"assets/assets/images/grades/grand%2520maitre_1.png": "ccf4b6631003faf4cd7b625936c5aa47",
"assets/assets/images/grades/grand%2520maitre_2.png": "c8285ac820c215f6d395c1250bfb6a7f",
"assets/assets/images/grades/grand%2520maitre_3.png": "7cf08234119d77bee371fd7e4ddd9b21",
"assets/assets/images/grades/grand_maitre_2.png": "dc48167e9cdc8121382aefff178959f7",
"assets/assets/images/grades/guerrier_1.png": "06b7bf528251a0a594b914de273b7d4c",
"assets/assets/images/grades/guerrier_2.png": "8bdd1c649d6d8243773e8e64e236ab79",
"assets/assets/images/grades/guerrier_3.png": "c5dc77acc22bb82e05fbda18995f8cba",
"assets/assets/images/grades/maitre_1.png": "ba323991730eafe58da25a29c2dfb00f",
"assets/assets/images/grades/maitre_2.png": "c42f27d3a4c5698f4ec8a12a597b46fc",
"assets/assets/images/grades/maitre_3.png": "850b084e3edb49849e88902c725cfe91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62db7c7b983520b468c6b78722e54691",
"assets/NOTICES": "2afc34e1ea0b8047c2e214ad13728763",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5ea7089c20092dacd767225e647996e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b8d8cbf953d975bf9213df03d010d38",
"/": "6b8d8cbf953d975bf9213df03d010d38",
"main.dart.js": "de34a3a39e419fbacfc3e4030446ea31",
"manifest.json": "cf36ce3d8e7f3e1d17f45307ff8a72e4",
"version.json": "ed68fa260140b3a4aca59e6f04895701"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
