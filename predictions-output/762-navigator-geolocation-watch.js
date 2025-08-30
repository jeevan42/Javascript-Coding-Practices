// Navigator Geolocation Watch
// Problem: How to track position continuously?
// Solution
navigator.geolocation.watchPosition(pos => {
  console.log("Tracking:", pos.coords.latitude, pos.coords.longitude);
});
// Conclusion: watchPosition tracks location updates.
