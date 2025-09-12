// Math Union
// Problem: Implement union as a utility function.
// Solution:
function union(a, b) {
  return new Set([...a, ...b]);
}
console.log(union(new Set([1,2]), new Set([2,3])));
// Conclusion: Union combines all unique elements.