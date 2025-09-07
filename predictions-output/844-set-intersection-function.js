// Concept: Intersection function utility
// Problem: Make intersection reusable for any sets.
// Solution:
function intersection(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}
console.log(intersection(new Set([1,2,3]), new Set([2,3,4]))); // {2,3}
// Conclusion: Filter elements that exist in both.

