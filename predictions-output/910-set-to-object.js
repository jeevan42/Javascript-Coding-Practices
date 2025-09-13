// Set to Object
// Problem: Convert Set into plain object with true values.
// Solution:
const s = new Set(['x','y','z']);
const obj = Object.fromEntries([...s].map(v => [v, true]));
console.log(obj);
// Conclusion: Handy for lookups in objects.