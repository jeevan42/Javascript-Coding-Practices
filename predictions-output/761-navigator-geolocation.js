// Navigator Geolocation
// Problem: How to get user’s current position?
// Solution
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
// Conclusion: navigator.geolocation gives location if permitted.
