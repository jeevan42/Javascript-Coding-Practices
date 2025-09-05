// Concept: Intersection Size
// Problem: Find number of common elements in two sets.
// Solution:
function intersectionSize(a,b) {
  return [...a].filter(x=>b.has(x)).length;
}
console.log(intersectionSize(new Set([1,2,3]), new Set([2,3,4]))); // 2
