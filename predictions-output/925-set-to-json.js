// Set to JSON
// Problem: Serialize a Set for storage.
// Solution:
const s = new Set([1,2,3]);
const json = JSON.stringify([...s]);
console.log(json);
// Conclusion: Convert to array before JSON.stringify.
