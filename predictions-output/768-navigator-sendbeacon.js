// Navigator SendBeacon
// Problem: How to send small data to server without blocking?
// Solution
navigator.sendBeacon("/log", JSON.stringify({ event: "page_unload" }));
// Conclusion: sendBeacon sends async data when user leaves page.
