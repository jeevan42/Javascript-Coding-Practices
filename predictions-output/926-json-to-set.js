// JSON to Set
// Problem: Deserialize JSON back to Set.
// Solution:
const json = "[1,2,3]";
const s = new Set(JSON.parse(json));
console.log(s);
// Conclusion: Parse JSON array and wrap in Set.
