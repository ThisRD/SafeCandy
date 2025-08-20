const CACHE_NAME = 'pwa-safe-candy-v1';
const urlsToCache = [
    '/SafeCandy/',
    '/SafeCandy/index.html',
    '/SafeCandy/style.css',
    '/SafeCandy/manifest.json',
    '/SafeCandy/icons/logotipo.png',
    '/SafeCandy/icons/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
