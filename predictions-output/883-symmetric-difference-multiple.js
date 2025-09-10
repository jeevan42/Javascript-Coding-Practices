// Symmetric Difference of Multiple Sets
// Problem: Find unique elements across multiple sets.
// Solution:
function symmetricDifferenceMultiple(...sets) {
  return sets.reduce((acc, s) => {
    const diff = new Set([...acc].filter(x => !s.has(x)).concat([...s].filter(x => !acc.has(x))));
    return diff;
  });
}
console.log(symmetricDifferenceMultiple(new Set([1,2]), new Set([2,3]), new Set([3,4])));
// Conclusion: Combines pairwise symmetric difference with reduce.
