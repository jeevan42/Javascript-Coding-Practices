// Subsequence Check with Set
// Problem: Check if all chars of one string exist in another.
// Solution:
function isSubsequence(a, b) {
  return [...a].every(ch => b.includes(ch));
}
console.log(isSubsequence("abc","a1b2c3"));
// Conclusion: Simplified subsequence using Set/Array.
