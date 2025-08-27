// Set vs Array
// Problem: Why use Set when arrays exist?
// Solution
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]
// Conclusion: Use Set when uniqueness is required without manual filtering.