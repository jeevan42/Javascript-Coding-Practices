// Map to Set
// Problem: Convert Map keys into a Set.
// Solution:
const m = new Map([['a',1], ['b',2]]);
const s = new Set(m.keys());
console.log(s);
// Conclusion: Sets can hold Map keys or values easily.