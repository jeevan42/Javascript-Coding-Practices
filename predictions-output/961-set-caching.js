// Caching with Set
// Problem: Cache API request IDs to avoid repeat calls.
// Solution:
const cache = new Set();
function fetchApi(id) {
  if (cache.has(id)) return "From cache";
  cache.add(id);
  return "Fetched fresh";
}
console.log(fetchApi(1));
console.log(fetchApi(1));
// Conclusion: Set prevents duplicate API calls.