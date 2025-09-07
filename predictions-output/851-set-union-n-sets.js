// Concept: Union of N sets
// Problem: Merge multiple sets efficiently.
// Solution:
function unionAll(sets) {
  return new Set([].concat(...sets.map(s => [...s])));
}
console.log(unionAll([new Set([1]), new Set([2,3])]));
// Conclusion: Spread all sets into one Set.
