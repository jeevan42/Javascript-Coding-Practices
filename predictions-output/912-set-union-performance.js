// Union Performance Test
// Problem: Compare Set union with array filter.
// Solution:
const a = new Set([...Array(1000).keys()]);
const b = new Set([...Array(1000).keys()].map(x => x+500));
console.time("union");
new Set([...a, ...b]);
console.timeEnd("union");
// Conclusion: Set operations are efficient for large data.
