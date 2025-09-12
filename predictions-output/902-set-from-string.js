// Set from String
// Problem: Remove duplicate characters from string.
// Solution:
const str = "mississippi";
const uniqueChars = new Set(str);
console.log([...uniqueChars].join(""));
// Conclusion: Sets deduplicate string characters.