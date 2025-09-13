// Math Symmetric Difference
// Problem: Implement symmetric difference as utility function.
// Solution:
function symmetric(a, b) {
  return new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x))));
}
console.log(symmetric(new Set([1,2]), new Set([2,3])));
// Conclusion: Symmetric difference = A∪B - A∩B.