'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0a47e3ab7862ddd305c424ab4f02691c",
".git/config": "7eaffed007366de3585ea6c0ecef1515",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee76f32d6319de3d0ad8efdff37721e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21dc257b0dba2fa45c2446dce9391e2a",
".git/logs/refs/heads/main": "7e350d3ca42886f18b77d791d3fce182",
".git/objects/00/574a42ea452bcf16dd02669cb52c03245146c7": "7a8be8485c4a34fe66ff8b064dc6ce9b",
".git/objects/03/589b682adf3e675e2df5dbd4d3281556170415": "e5a33254202a49838718dc36a0c2fbd5",
".git/objects/06/256d333aaedfcd1205dcc7a5a8675e6f77c7c9": "35b1ddbf592ba1469bb4f0cb00bad8f9",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/4a309a24cb11880cafef58f6054102ae44a215": "36d454a1c6f710ca7204dabe6582e7f2",
".git/objects/13/6321b3ce77e1716ff85c55164208aa15d12646": "283fb17413c650f0a31c4b397cfa9112",
".git/objects/15/e68cf6f748c5630d990a7cb65f82c49304531a": "7fa47b4783f1a0240c379ba5a3048666",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/9ff4b99985fb6baac29bfa7fb9da8bd1420f2b": "00d741d63fffccc774413e30aa9568a4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/899766513e923a07d93051d1ee5978e2d525d4": "30023cba68eeae094408e6ba7b8af9e6",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/d9b3558845ca710ec9347543ee46ec8a806a6f": "e92b3d37eada9e535eae5efeff6c187b",
".git/objects/2a/7a01b7648027d565c66a94170f82d2ed3e82c2": "6bac696229440dd3166a2041c5a6a4c0",
".git/objects/2a/ab9f94d8013308f8d7ef69c3339462ab4fd328": "40d86a0631f4dd7b2b9a7f028fd8764c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/8b7176d7a21c8618a5e8137ca97c493d021a1a": "f6ab145d8998a0c97e00a0333127a319",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/39/7f33d4eadb045e968034fa1f31a55c8b9c40e2": "3937d1ca9cd096999a94dd4d5739af10",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/e2e425c64943217c25387918410c7449556abe": "52fe503b8fd2a0239713a275da9fee90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2aa2d6ea5d70b0fe31867bfd67473515b641fa": "b4764dc4796ac1bc79d8cd008af216ed",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/4ba3cf18b73cf8ad329f006002a230f232d42a": "2638f0c117a57eeadcd11ad87a2fae32",
".git/objects/53/8ec5bf2a9a5724899daf728577cd0b8beaae90": "91a402a18f3471147ce264a747cc188a",
".git/objects/55/986aea4b71ada122b1b8224ede751b084791e9": "d5195c8dab870a1b105f0fd24c92b7f4",
".git/objects/60/e4caad7df90bb2fc4e49d91617f24099b1d828": "976c933943ba89a1e423c59b847e704b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/7ad974de9b874e60f3415b7bd5642f92e1102a": "d93620e72af0987c1840e337fa141c80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/0732d3a4e6ded6e800d44fa501fceab1d684cc": "c787b1f7500f6281489c1260a8b26c34",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/fd1b3fa68afef6479a89a39029446c26a90427": "0e7744355b2d542e2dea3cc95736a996",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2a99161fbb30490c7dc20c351653c402c765c6": "09bc18e1f3233ad84df56fb1605b3114",
".git/objects/b2/fe13f7e100e4d16fb3325c097d29d1342c09b3": "956c3c8320fb82a91155cc8456857bd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c0/bc165243a247bec0778a8666bc8c6719165a5c": "a7718889a27cca861bf291800781d074",
".git/objects/c6/57187f705cd4fd35abc06960803829b8fa4de7": "f48a5acbb89ba44c28318ea1312eba7a",
".git/objects/ca/a6e69d19f24a7b4c916795b513f8d8735649c7": "f6e949c3e0a2c561100a958b59803fe0",
".git/objects/cc/10c3b953575516ae08f5882a1b686ac03f33ec": "3312e2df0b05533a6ab1340d845f919b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/bdc1a39b50424b4e1aa54a5cca50b5c13d6187": "be773b6fbaffbc9c08871a2a2f4a4896",
".git/objects/cf/b256c688ff2204dc2660c08cf2cdeda318a02c": "ea17474d275f9b71eaaa6af7712d1cb3",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/0713d840989db102eacc9f0339031c1bfa28cd": "a59f25b1a6c803da61724f56c8304312",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/c212e1fd4079ba8a164989ccfdd33c56d16bdf": "76ae4d0d088c03c66d1de9fe76cdfb13",
".git/refs/heads/main": "c9b2b34fded30bd56d3d03c801f54d98",
"assets/AssetManifest.json": "5e17177a08e172f0f587d13e82226f3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/image/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/image/leetcode.svg": "dcda79494a13cf80fcb743c7414a6727",
"assets/image/linkedin.svg": "ebf40b1ee1e9204dac2f11148b0bcd9a",
"assets/image/profile.jpg": "4ff0963a61f3fc2e4a551a065ddc1f2e",
"assets/NOTICES": "434a887a6448b4d8f484fa07afb677f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "225d59fdf93e4443acc3402a011ed876",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/leetcode.svg": "dcda79494a13cf80fcb743c7414a6727",
"icons/linkedin.svg": "ebf40b1ee1e9204dac2f11148b0bcd9a",
"index.html": "a44a740b8b8bb1c34a9fb74b73a1fe9f",
"/": "a44a740b8b8bb1c34a9fb74b73a1fe9f",
"logo.png": "cbbf4ffc3c1741a18040aa4ff06fc792",
"main.dart.js": "65f2ecd932e364d636b5c600afa317ff",
"manifest.json": "ba78fadee7147cfd3d38e336070989a0",
"README.md": "16d2b144480061754d743e3b08acaa41",
"version.json": "3b78d97305d645b08a58c24e1e6f442e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
