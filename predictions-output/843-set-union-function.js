// Concept: Union function utility
// Problem: Combine multiple sets into one reusable function.
// Solution:
function union(...sets) {
  return new Set(sets.flatMap(s => [...s]));
}
console.log(union(new Set([1]), new Set([2, 3]))); // {1,2,3}
// Conclusion: Utility function simplifies reusability.
