// Union of Sets
// Problem: How to combine values of two Sets without duplicates?
// Solution
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Set {1, 2, 3, 4, 5}
// Conclusion: Spread operator allows simple union.