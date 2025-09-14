// Anagram Check with Set
// Problem: Check if two words use same letters.
// Solution:
function isAnagram(a, b) {
  return new Set(a).size === new Set(b).size;
}
console.log(isAnagram("listen","silent")); 
// Conclusion: Basic anagram check using Set size.
