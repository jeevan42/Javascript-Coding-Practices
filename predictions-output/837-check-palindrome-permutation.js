// Concept: Palindrome Permutation
// Problem: Check if string can be rearranged into palindrome.
// Solution:
function canPermutePalindrome(str) {
  const freq = {};
  for (let c of str) freq[c] = (freq[c]||0)+1;
  return Object.values(freq).filter(v=>v%2!==0).length <= 1;
}
console.log(canPermutePalindrome("carrace")); // true
