// Union of Multiple Sets
// Problem: Find union of more than two sets.
// Solution:
function unionAll(...sets) {
  return sets.reduce((a, b) => new Set([...a, ...b]));
}
console.log(unionAll(new Set([1,2]), new Set([2,3]), new Set([3,4])));
// Conclusion: Reduce + spread merges multiple sets.
