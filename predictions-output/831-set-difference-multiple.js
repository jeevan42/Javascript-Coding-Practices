// Concept: Difference Multiple Sets
// Problem: Remove elements of all other sets from first.
// Solution:
function differenceAll(first, sets) {
  return sets.reduce((a,b)=> new Set([...a].filter(x=>!b.has(x))), first);
}
console.log(differenceAll(new Set([1,2,3,4]), [new Set([2]), new Set([3])])); // Set {1,4}
