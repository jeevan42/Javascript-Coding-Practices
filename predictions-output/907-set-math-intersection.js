// Math Intersection
// Problem: Implement intersection as utility function.
// Solution:
function intersection(a, b) {
  return new Set([...a].filter(x => b.has(x)));
}
console.log(intersection(new Set([1,2]), new Set([2,3])));
// Conclusion: Intersection gives common values.