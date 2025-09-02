// Concept: Disjoint Sets
// Problem: Check if two sets have no elements in common.
// Solution:
function areDisjoint(setA, setB) {
  return ![...setA].some(val => setB.has(val));
}
console.log(areDisjoint(new Set([1,2]), new Set([3,4]))); // true
console.log(areDisjoint(new Set([1,2]), new Set([2,3]))); // false