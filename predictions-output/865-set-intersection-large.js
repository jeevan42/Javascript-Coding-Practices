// Concept: Large dataset intersection
// Problem: Optimize intersection for big sets.
// Solution:
function fastIntersect(a,b){
  if(a.size>b.size) [a,b]=[b,a];
  return new Set([...a].filter(x=>b.has(x)));
}
console.log(fastIntersect(new Set([1,2,3]), new Set([2,3,4])));
// Conclusion: Always iterate smaller set for efficiency.
