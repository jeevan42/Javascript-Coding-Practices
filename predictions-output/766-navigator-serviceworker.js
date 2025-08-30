// Navigator Service Worker
// Problem: How to check if ServiceWorker is supported?
// Solution
console.log("ServiceWorker supported:", "serviceWorker" in navigator);
// Conclusion: Use this to enable PWAs only on supported browsers.
