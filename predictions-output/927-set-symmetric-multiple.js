// Symmetric Difference Multiple Sets
// Problem: Compute symmetric difference of many sets.
// Solution:
function symmetricAll(...sets) {
  return sets.reduce((a, b) => {
    return new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x))));
  });
}
console.log(symmetricAll(new Set([1,2]), new Set([2,3]), new Set([3,4])));
// Conclusion: Extend symmetric difference to multiple sets.
