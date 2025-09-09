// Concept: Measure memory usage of Set
// Problem: How does Set memory scale?
// Solution:
const memSet=new Set([...Array(1e5).keys()]);
console.log("Size:",memSet.size);
// Conclusion: Size gives count, profiling tools show memory.
