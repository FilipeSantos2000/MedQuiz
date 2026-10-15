// ===== SERVICE WORKER =====
// Network-first para os ficheiros da app; cache serve de fallback offline.
// Pedidos ao Supabase (outro domínio) não passam pela cache.
const CACHE = 'medquiz-v1';
const ASSETS = [
    './',
    'index.html',
    'manifest.json',
    'css/style.css',
    'js/supabase.js',
    'js/utils.js',
    'js/questions.js',
    'js/engine.js',
    'js/auth.js',
    'js/store.js',
    'js/quiz.js',
    'js/history.js',
    'js/app.js',
    'icons/icon.svg',
    'icons/icon-192.png',
    'icons/icon-512.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);
    if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

    e.respondWith(
        fetch(e.request)
            .then(res => {
                const copy = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, copy));
                return res;
            })
            .catch(() => caches.match(e.request))
    );
});
