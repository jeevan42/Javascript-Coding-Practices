// Set vs Array includes()
// Problem: Performance difference.
// Solution:
const arr = [...Array(1000).keys()];
const s = new Set(arr);
console.time("array");
arr.includes(999);
console.timeEnd("array");
console.time("set");
s.has(999);
console.timeEnd("set");
// Conclusion: Set.has is faster than Array.includes for large data.
