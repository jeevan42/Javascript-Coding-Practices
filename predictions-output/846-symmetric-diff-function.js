// Concept: Symmetric Difference utility
// Problem: Wrap symmetric difference in function.
// Solution:
function symmetricDiff(a, b) {
  return new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x))));
}
console.log(symmetricDiff(new Set([1,2]), new Set([2,3]))); // {1,3}
// Conclusion: Combine differences both ways.


