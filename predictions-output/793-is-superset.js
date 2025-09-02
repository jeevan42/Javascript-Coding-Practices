// Concept: Superset Check
// Problem: Check if one set is a superset of another.
// Solution:
function isSuperset(setA, setB) {
  return [...setB].every(val => setA.has(val));
}
console.log(isSuperset(new Set([1,2,3,4]), new Set([2,3]))); // true
console.log(isSuperset(new Set([1,2]), new Set([1,2,3]))); // false