// Concept: Equality check for Sets
// Problem: How to compare two Sets for equality?
// Solution:
function areEqual(a,b){
  if(a.size!==b.size) return false;
  for(const val of a) if(!b.has(val)) return false;
  return true;
}
console.log(areEqual(new Set([1,2]), new Set([2,1]))); // true
// Conclusion: Compare size and elements manually.
