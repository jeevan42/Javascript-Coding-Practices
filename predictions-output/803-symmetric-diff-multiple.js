// Concept: Symmetric Difference Multiple
// Problem: Elements that appear in odd number of sets.
// Solution:
function symmetricDiff(...sets) {
  return sets.reduce((a,b) => new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x)))));
}
console.log(symmetricDiff(new Set([1,2]), new Set([2,3]), new Set([3,4]))); // Set {1,4}