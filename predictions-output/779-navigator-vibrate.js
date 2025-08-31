// navigator.vibrate()
// Problem: Trigger device vibration on supported devices.
// Solution
if ("vibrate" in navigator) {
  navigator.vibrate(500); // vibrates for 500ms
}
// Conclusion: navigator.vibrate() useful in mobile apps/games.
