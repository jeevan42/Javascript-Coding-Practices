// Union of Multiple Sets
// Problem: Find the union of more than two sets.
// Solution:
function unionMultiple(...sets) {
  return sets.reduce((acc, s) => new Set([...acc, ...s]), new Set());
}
console.log(unionMultiple(new Set([1,2]), new Set([2,3]), new Set([3,4])));
// Conclusion: Union works for multiple sets using reduce.
