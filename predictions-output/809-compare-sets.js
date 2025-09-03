// Concept: Compare Sets
// Problem: Check if two sets are equal.
// Solution:
function areEqual(a,b) {
  return a.size === b.size && [...a].every(x => b.has(x));
}
console.log(areEqual(new Set([1,2]), new Set([2,1]))); // true