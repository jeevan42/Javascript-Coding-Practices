// Concept: Cartesian Product
// Problem: Generate all ordered pairs between two sets.
// Solution:
function cartesianProduct(setA, setB) {
  return [...setA].flatMap(a => [...setB].map(b => [a, b]));
}
console.log(cartesianProduct(new Set([1,2]), new Set(['a','b'])));
// [[1,'a'], [1,'b'], [2,'a'], [2,'b']]