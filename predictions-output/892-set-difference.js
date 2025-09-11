// Set Difference
// Problem: Find elements in A but not in B.
// Solution:
function difference(a, b) {
  return new Set([...a].filter(x => !b.has(x)));
}
console.log(difference(new Set([1,2,3]), new Set([2,4])));
// Conclusion: Difference uses filter.
