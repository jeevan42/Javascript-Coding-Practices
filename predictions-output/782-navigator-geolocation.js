// navigator.geolocation
// Problem: Get user's geographical location.
// Solution
navigator.geolocation.getCurrentPosition(
  pos => console.log("Latitude:", pos.coords.latitude, "Longitude:", pos.coords.longitude),
  err => console.error("Error:", err)
);
// Conclusion: navigator.geolocation fetches real-time location data.
