// Concept: Performance of Set vs Array
// Problem: Compare lookup times.
// Solution:
const arr = Array.from({length:100000},(_,i)=>i);
const setBig = new Set(arr);
console.time("Array");
arr.includes(99999);
console.timeEnd("Array");
console.time("Set");
setBig.has(99999);
console.timeEnd("Set");
// Conclusion: Set lookup is faster for large datasets.
