// Concept: Convert Map to Set
// Problem: Extract keys or values from a Map into Set.
// Solution:
const myMap = new Map([["x",1],["y",2]]);
const keySet = new Set(myMap.keys());
console.log(keySet); // { 'x','y' }
// Conclusion: Use .keys() or .values() wrapped in Set.


