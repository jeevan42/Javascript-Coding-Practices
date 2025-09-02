// Concept: Unique Strings Validation
// Problem: Check if a string has all unique characters.
// Solution:
function isUnique(str) {
  return new Set(str).size === str.length;
}
console.log(isUnique("abcdef")); // true
console.log(isUnique("hello"));  // false