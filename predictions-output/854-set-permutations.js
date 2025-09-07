// Concept: Permutations from Set
// Problem: Generate all orderings of Set elements.
// Solution:
function permutations(arr) {
  if (arr.length===0) return [[]];
  return arr.flatMap((v,i)=>permutations([...arr.slice(0,i),...arr.slice(i+1)]).map(p=>[v,...p]));
}
console.log(permutations([1,2,3]));
// Conclusion: Recursive permutation logic.
