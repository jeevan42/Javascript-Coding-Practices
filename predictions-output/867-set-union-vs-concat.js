// Concept: Deduplicate merged arrays
// Problem: Why not concat arrays and dedupe?
// Solution:
const arrA=[1,2,3]; const arrB=[2,3,4];
const unique=[...new Set(arrA.concat(arrB))];
console.log(unique); // [1,2,3,4]
// Conclusion: Concat + Set achieves union easily.
