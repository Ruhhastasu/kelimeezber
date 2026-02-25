self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("kelime-ezber-v2").then((cache) => cache.addAll([
      "./",
      "./index.html",
      "./manifest.json",
      "./sw.js",
      "./icon-192.png",
      "./icon-512.png"
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
