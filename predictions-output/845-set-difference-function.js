// Concept: Difference function utility
// Problem: Implement generic difference for reuse.
// Solution:
function difference(setA, setB) {
  return new Set([...setA].filter(x => !setB.has(x)));
}
console.log(difference(new Set([1,2,3]), new Set([2]))); // {1,3}
// Conclusion: Subtract one set from another.

