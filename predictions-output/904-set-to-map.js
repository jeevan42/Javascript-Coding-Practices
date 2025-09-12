// Set to Map
// Problem: Convert Set into Map with values as true.
// Solution:
const s = new Set(['a','b','c']);
const map = new Map([...s].map(v => [v, true]));
console.log(map);
// Conclusion: Useful for fast lookups.