// Concept: Set vs Array Lookup
// Problem: Compare lookup performance.
// Solution:
const arr = [1,2,3,4,5];
const set = new Set(arr);
console.log(arr.includes(3)); // true (O(n))
console.log(set.has(3));      // true (O(1))
