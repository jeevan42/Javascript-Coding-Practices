// Math Difference
// Problem: Implement difference as utility function.
// Solution:
function difference(a, b) {
  return new Set([...a].filter(x => !b.has(x)));
}
console.log(difference(new Set([1,2,3]), new Set([2])));
// Conclusion: Difference = A - B.