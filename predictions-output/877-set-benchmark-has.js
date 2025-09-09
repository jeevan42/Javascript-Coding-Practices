// Concept: Benchmark lookup in Set
// Problem: How fast is has()?
// Solution:
const lookupSet=new Set([...Array(1e5).keys()]);
console.time("Set has");
lookupSet.has(99999);
console.timeEnd("Set has");
// Conclusion: Lookup is near O(1).
