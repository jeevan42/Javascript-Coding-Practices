// Concept: Benchmark adding elements
// Problem: How fast are Set adds?
// Solution:
console.time("Set add");
const sBench=new Set();
for(let i=0;i<1e5;i++) sBench.add(i);
console.timeEnd("Set add");
// Conclusion: Adding is efficient due to hashing.
