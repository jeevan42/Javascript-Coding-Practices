// Concept: Subset Check
// Problem: Check if one set is a subset of another.
// Solution:
function isSubset(setA, setB) {
  return [...setA].every(val => setB.has(val));
}
console.log(isSubset(new Set([1,2]), new Set([1,2,3]))); // true
console.log(isSubset(new Set([1,4]), new Set([1,2,3]))); // false