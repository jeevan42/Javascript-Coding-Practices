// Set Equality
// Problem: Check if two sets are equal.
// Solution:
function areSetsEqual(a, b) {
  return a.size === b.size && [...a].every(x => b.has(x));
}
console.log(areSetsEqual(new Set([1,2]), new Set([2,1])));
// Conclusion: Size + element check confirms equality.
