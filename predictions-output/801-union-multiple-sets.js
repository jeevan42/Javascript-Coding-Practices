// Concept: Union of Multiple Sets
// Problem: Merge multiple sets into one.
// Solution:
function union(...sets) {
  return new Set(sets.flatMap(s => [...s]));
}
console.log(union(new Set([1,2]), new Set([2,3]), new Set([4]))); // Set {1,2,3,4}