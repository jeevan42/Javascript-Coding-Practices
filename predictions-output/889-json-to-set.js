// JSON to Set
// Problem: Convert JSON back into Set.
// Solution:
const json = "[1,2,3]";
const s = new Set(JSON.parse(json));
console.log(s);
// Conclusion: Parse JSON then wrap in Set.
