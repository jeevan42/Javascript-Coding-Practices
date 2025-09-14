// Palindrome Check with Set
// Problem: Check if string can form palindrome.
// Solution:
function canFormPalindrome(str) {
  const counts = {};
  for (let ch of str) counts[ch] = (counts[ch]||0)+1;
  let odd = 0;
  for (let v of Object.values(counts)) if (v % 2) odd++;
  return odd <= 1;
}
console.log(canFormPalindrome("civic")); 
// Conclusion: Frequency + Set logic detects palindromes.
