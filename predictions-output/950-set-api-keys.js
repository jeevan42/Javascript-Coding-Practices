// API Keys Registry
// Problem: Track valid API keys.
// Solution:
const apiKeys = new Set(["key1","key2"]);
function check(key) { return apiKeys.has(key) ? "Valid" : "Invalid"; }
console.log(check("key1"));
console.log(check("bad"));
// Conclusion: Sets store API keys cleanly.
