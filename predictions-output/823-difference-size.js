// Concept: Difference Size
// Problem: Find size of difference set.
// Solution:
function differenceSize(a,b) {
  return [...a].filter(x=>!b.has(x)).length;
}
console.log(differenceSize(new Set([1,2,3]), new Set([3]))); // 2
