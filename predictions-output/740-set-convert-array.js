// Convert Set to Array
// Problem: How to convert Set values into an array?
// Solution
const set4 = new Set(["a", "b", "c"]);
const arr2 = Array.from(set4);
console.log(arr2); // ["a", "b", "c"]
// Conclusion: Use Array.from() or spread syntax to convert.