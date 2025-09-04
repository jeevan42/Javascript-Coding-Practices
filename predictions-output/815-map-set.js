// Concept: Map Set
// Problem: Double every element in set.
// Solution:
function mapSet(set, fn) {
  return new Set([...set].map(fn));
}
console.log(mapSet(new Set([1,2,3]), x => x*2)); // Set {2,4,6}