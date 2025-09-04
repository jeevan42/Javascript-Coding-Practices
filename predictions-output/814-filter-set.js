// Concept: Filter Set
// Problem: Keep only even numbers.
// Solution:
function filterSet(set, fn) {
  return new Set([...set].filter(fn));
}
console.log(filterSet(new Set([1,2,3,4]), x => x%2===0)); // Set {2,4}