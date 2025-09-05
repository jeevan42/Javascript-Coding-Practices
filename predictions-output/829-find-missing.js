// Concept: Find Missing Numbers
// Problem: Identify missing elements from a range.
// Solution:
function findMissing(arr, n) {
  const set = new Set(arr);
  return [...Array(n+1).keys()].slice(1).filter(x=>!set.has(x));
}
console.log(findMissing([2,3,7],7)); // [1,4,5,6]
