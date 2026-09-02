const CACHE_NAME = "sonvia-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./profile.html",
  "./artist-dashboard.html",
  "./manifest.json"
];


// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(urlsToCache);

      })

  );

  // Activate the new service worker immediately
  self.skipWaiting();

});


// ==========================================
// ACTIVATE
// ==========================================

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames.map(cacheName => {

          if (cacheName !== CACHE_NAME) {

            return caches.delete(cacheName);

          }

        })

      );

    })

  );

  // Take control of open pages immediately
  self.clients.claim();

});


// ==========================================
// FETCH
// ==========================================

self.addEventListener("fetch", event => {

  // Always get the latest HTML files
  if (
    event.request.method === "GET" &&
    event.request.destination === "document"
  ) {

    event.respondWith(

      fetch(event.request)
        .then(response => {

          const responseClone = response.clone();

          caches.open(CACHE_NAME).then(cache => {

            cache.put(event.request, responseClone);

          });

          return response;

        })
        .catch(() => {

          return caches.match(event.request);

        })

    );

    return;
  }


  // Other files can use the cache first
  event.respondWith(

    caches.match(event.request)
      .then(response => {

        return response || fetch(event.request);

      })

  );

});
