// navigator.connection
// Problem: Detect user’s network type and speed.
// Solution
if ("connection" in navigator) {
  console.log("Effective Network Type:", navigator.connection.effectiveType);
}
// Conclusion: Allows adjusting features based on connection quality.
