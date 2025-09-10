// Convert Set to JSON
// Problem: Serialize a Set into JSON.
// Solution:
const s = new Set([1,2,3]);
console.log(JSON.stringify([...s]));
// Conclusion: Convert Set to array before JSON.
