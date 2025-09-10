// Strict Subset
// Problem: Check if one set is a proper subset of another.
// Solution:
function isStrictSubset(a, b) {
  return a.size < b.size && [...a].every(x => b.has(x));
}
console.log(isStrictSubset(new Set([1,2]), new Set([1,2,3])));
// Conclusion: Subset check with size difference.
