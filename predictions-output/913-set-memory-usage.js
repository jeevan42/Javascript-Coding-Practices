// Memory Usage
// Problem: Estimate memory usage of Set.
// Solution:
const s = new Set([...Array(1000).keys()]);
console.log("Size:", s.size);
// Conclusion: Memory grows with elements, but uniqueness saves space.
