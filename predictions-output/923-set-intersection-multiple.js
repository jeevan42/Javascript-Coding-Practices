// Intersection of Multiple Sets
// Problem: Find common elements among many sets.
// Solution:
function intersectionAll(...sets) {
  return sets.reduce((a, b) => new Set([...a].filter(x => b.has(x))));
}
console.log(intersectionAll(new Set([1,2,3]), new Set([2,3]), new Set([3,4])));
// Conclusion: Reduce + filter yields intersection across sets.
