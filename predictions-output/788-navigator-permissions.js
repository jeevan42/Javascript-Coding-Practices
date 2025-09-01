// navigator.permissions
// Problem: Check permission status (geolocation, notifications, etc.).
// Solution
navigator.permissions.query({ name: "geolocation" })
  .then(status => console.log("Permission:", status.state));
// Conclusion: navigator.permissions helps manage app permissions.
