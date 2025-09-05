// Concept: Union of Many Sets
// Problem: Union operation on array of sets.
// Solution:
function unionAll(sets) {
  return new Set(sets.flatMap(s=>[...s]));
}
console.log(unionAll([new Set([1,2]), new Set([2,3]), new Set([4])])); // Set {1,2,3,4}
