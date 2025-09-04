// Concept: Unique Pairs
// Problem: Store unique pairs of numbers.
// Solution:
const pairs = new Set();
pairs.add(JSON.stringify([1,2]));
pairs.add(JSON.stringify([1,2]));
console.log([...pairs].map(JSON.parse)); // [[1,2]]