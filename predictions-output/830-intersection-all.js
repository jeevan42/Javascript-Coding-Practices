// Concept: Intersection All
// Problem: Find common elements across multiple sets.
// Solution:
function intersectionAll(sets) {
  return sets.reduce((a,b)=> new Set([...a].filter(x=>b.has(x))));
}
console.log(intersectionAll([new Set([1,2,3]), new Set([2,3]), new Set([3,4])])); // Set {3}
