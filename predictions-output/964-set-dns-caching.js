// DNS Cache
// Problem: Cache DNS lookups uniquely.
// Solution:
const dnsCache = new Set(["google.com"]);
function resolve(host) {
  if (dnsCache.has(host)) return "Cache hit";
  dnsCache.add(host);
  return "Resolved fresh";
}
console.log(resolve("google.com"));
console.log(resolve("openai.com"));
// Conclusion: Sets are effective for simple caches.