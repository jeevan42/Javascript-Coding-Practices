// Concept: Merge Sets into Array
// Problem: Merge multiple sets into single array.
// Solution:
function mergeToArray(...sets) {
  return [...new Set(sets.flatMap(s => [...s]))];
}
console.log(mergeToArray(new Set([1,2]), new Set([2,3]))); // [1,2,3]