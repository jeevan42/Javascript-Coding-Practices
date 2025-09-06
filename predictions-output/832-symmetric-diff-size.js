// Concept: Symmetric Difference Size
// Problem: Count unique elements in symmetric difference.
// Solution:
function symmetricDiffSize(a,b) {
  return [...a].filter(x=>!b.has(x)).length + [...b].filter(x=>!a.has(x)).length;
}
console.log(symmetricDiffSize(new Set([1,2]), new Set([2,3]))); // 2
