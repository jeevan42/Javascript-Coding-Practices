// Concept: Cartesian product of multiple sets
// Problem: Extend Cartesian product beyond 2 sets.
// Solution:
function cartesian(...sets) {
  return sets.reduce((a,b)=>a.flatMap(x=>[...b].map(y=>[].concat(x,y))));
}
console.log(cartesian([1,2],[3,4],[5]));
// Conclusion: Reduce across all sets.
