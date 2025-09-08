// Concept: Large dataset difference
// Problem: Efficient difference for large sets.
// Solution:
function fastDiff(a,b){
  return new Set([...a].filter(x=>!b.has(x)));
}
console.log(fastDiff(new Set([1,2,3]), new Set([2])));
// Conclusion: Straight filter is efficient for difference.
