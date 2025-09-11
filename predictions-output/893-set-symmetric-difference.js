// Symmetric Difference
// Problem: Find elements only in one set.
// Solution:
function symmetricDifference(a, b) {
  return new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x))));
}
console.log(symmetricDifference(new Set([1,2,3]), new Set([2,4])));
// Conclusion: Combine difference from both sides.
