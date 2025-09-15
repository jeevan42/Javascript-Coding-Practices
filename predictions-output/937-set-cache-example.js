// Simple Cache with Set
// Problem: Cache processed ids using Set.
// Solution:
const cache = new Set();
function process(id) {
  if (cache.has(id)) return "Already processed";
  cache.add(id);
  return `Processing ${id}`;
}
console.log(process(1));
console.log(process(1));
// Conclusion: Sets are great for caching.
