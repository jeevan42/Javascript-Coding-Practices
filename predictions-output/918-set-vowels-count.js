// Count Unique Vowels
// Problem: Count distinct vowels in string.
// Solution:
function uniqueVowels(str) {
  const vowels = new Set("aeiou");
  const found = new Set([...str].filter(ch => vowels.has(ch)));
  return found.size;
}
console.log(uniqueVowels("education"));
// Conclusion: Useful for vowel analysis.
