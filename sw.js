self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("kelime-ezber-v1").then((cache) => cache.addAll([
      "./index_full_features.html",
      "./manifest.json"
    ]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
