// navigator.serviceWorker
// Problem: Register a service worker for offline/PWA functionality.
// Solution
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => console.log("SW registered"));
}
// Conclusion: navigator.serviceWorker enables background tasks and offline support.
