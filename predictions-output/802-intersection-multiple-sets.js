// Concept: Intersection of Multiple Sets
// Problem: Get common elements across many sets.
// Solution:
function intersection(...sets) {
  return sets.reduce((a,b) => new Set([...a].filter(x => b.has(x))));
}
console.log(intersection(new Set([1,2,3]), new Set([2,3,4]), new Set([3,4]))); // Set {3}