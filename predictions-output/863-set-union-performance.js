// Concept: Benchmark union performance
// Problem: Compare union speed for large sets.
// Solution:
const bigA=new Set([...Array(1e5).keys()]);
const bigB=new Set([...Array(1e5).keys()].map(x=>x+5e4));
console.time("union");
new Set([...bigA,...bigB]);
console.timeEnd("union");
// Conclusion: Spread is efficient for union.
