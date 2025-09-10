// Intersection of Multiple Sets
// Problem: Find common elements across multiple sets.
// Solution:
function intersectionMultiple(...sets) {
  return sets.reduce((acc, s) => new Set([...acc].filter(x => s.has(x))));
}
console.log(intersectionMultiple(new Set([1,2,3]), new Set([2,3,4]), new Set([3,4,5])));
// Conclusion: Works by chaining filter with reduce.
