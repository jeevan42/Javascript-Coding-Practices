// Concept: Power Set
// Problem: Generate all subsets (power set) of a given set.
// Solution:
function powerSet(originalSet) {
  const arr = [...originalSet];
  return arr.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [...set, value])),
    [[]]
  );
}
console.log(powerSet(new Set([1,2]))); // [[], [1], [2], [1,2]]