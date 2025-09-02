// Concept: Symmetric Difference of Sets
// Problem: Find elements that are in either of two sets, but not both.
// Solution:
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const symmetricDifference = new Set([...setA].filter(x => !setB.has(x)).concat([...setB].filter(x => !setA.has(x))));
console.log(symmetricDifference); // Set {1, 2, 5, 6}