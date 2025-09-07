// Concept: Convert Set to JSON
// Problem: How to serialize a Set for APIs or storage?
// Solution:
const mySet = new Set([1, 2, 3]);
const json = JSON.stringify([...mySet]);
console.log(json); // "[1,2,3]"
// Conclusion: Spread into array before stringifying.