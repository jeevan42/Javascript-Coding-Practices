// Concept: Convert JSON back to Set
// Problem: How to restore Set from API JSON data?
// Solution:
const data = "[1,2,3]";
const set = new Set(JSON.parse(data));
console.log(set); // Set {1,2,3}
// Conclusion: Parse JSON then wrap in Set.