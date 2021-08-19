importScripts('https://unpkg.com/idb/build/iife/index-min.js');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js', { scope: '/' }).then(
      (registration) => {
        console.log('ServiceWorker registration succesful!');
      },
      (err) => {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('isntalled!');
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim()); // Become available to all pages
  console.log('activated!');
});

let db;
const request = self.indexedDB.open('todolist');
request.onsuccess = (event) => {
  db = event.target.result;
  console.log('indexedDB opened!');
};
request.onerror = () => {
  console.log('indexedDB failed!');
};

request.onupgradeneeded = () => {
  db.createObjectStore('token');
  db.createObjectStore('username');
  db.createObjectStore('list');
  console.log('onupgrade salta!');
};

let token = null;
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SET_TOKEN') {
    token = event.data.token;
    console.log('[SW] token set!', event.data.token);
    confirmTokenExistence();
  }
  if (event.data && event.data.type === 'GET_TOKEN') {
    confirmTokenExistence();
  }
});

const confirmTokenExistence = () => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
      type: 'window',
    })
    .then((clients) => {
      if (clients && clients.length) {
        // Send a response - the clients
        // array is ordered by last focused
        clients[0].postMessage({
          type: 'REPLY_TOKEN',
          token: token != null,
        });
      }
    });
};
