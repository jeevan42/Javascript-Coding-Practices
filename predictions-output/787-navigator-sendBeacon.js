// navigator.sendBeacon()
// Problem: Send analytics/logs without blocking navigation.
// Solution
navigator.sendBeacon("/analytics", JSON.stringify({ event: "page_unload" }));
// Conclusion: navigator.sendBeacon ensures lightweight async requests.
