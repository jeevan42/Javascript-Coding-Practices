// Cartesian Product of Sets with Objects
// Problem: Generate all object pairs from two sets.
// Solution:
function cartesianObjects(a, b) {
  const result = new Set();
  for (let x of a) for (let y of b) result.add([x,y]);
  return result;
}
const s1 = new Set([{id:1},{id:2}]);
const s2 = new Set([{id:'A'},{id:'B'}]);
console.log(cartesianObjects(s1, s2));
// Conclusion: Useful for pairing object sets.
