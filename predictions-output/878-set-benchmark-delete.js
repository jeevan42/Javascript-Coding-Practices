// Concept: Benchmark delete in Set
// Problem: How efficient is delete()?
// Solution:
console.time("Set delete");
lookupSet.delete(50000);
console.timeEnd("Set delete");
// Conclusion: Delete also O(1) average.
