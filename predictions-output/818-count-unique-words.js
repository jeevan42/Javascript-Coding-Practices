// Concept: Count Unique Words
// Problem: Count number of unique words in text.
// Solution:
function countUnique(text) {
  return new Set(text.split(/\s+/)).size;
}
console.log(countUnique("this is is text")); // 3