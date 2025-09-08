// Concept: Symmetric difference for multiple sets
// Problem: Generalize symmetric difference beyond 2 sets.
// Solution:
function multiSymDiff(...sets){
  return sets.reduce((a,b)=>new Set([...a].filter(x=>!b.has(x)).concat([...b].filter(x=>!a.has(x)))));
}
console.log(multiSymDiff(new Set([1,2]), new Set([2,3]), new Set([3,4])));
// Conclusion: Reduce across sets to extend symmetric diff.
