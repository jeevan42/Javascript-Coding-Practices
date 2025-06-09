/**
 * 🔠 Problem: Find the Longest Word in a Sentence
 * 
 * 📘 Definition:
 *   Write a function that takes a sentence (string) and returns the **longest word** in it.
 *   If multiple words are longest with the same length, return the first one.
 * 
 * 📥 Input: A sentence string (may contain punctuation).
 * 📤 Output: A single longest word (string).
 * 
 * 🧪 Examples:
 *   longestWord("The quick brown fox jumps over the lazy dog") ➞ "jumps"
 *   longestWord("Hi, I am Jeevan.") ➞ "Jeevan"
 *   longestWord("A small sentence.") ➞ "sentence"
 */

function longestWord(sentence) {
  // 🧹 Step 1: Clean punctuation using RegEx
  const cleanSentence = sentence.replace(/[^\w\s]/g, '');

  // 🧩 Step 2: Split sentence into words
  const words = cleanSentence.split(/\s+/);

  // 🧠 Step 3: Track longest word using reduce
  const longest = words.reduce((longestSoFar, currentWord) => {
    return currentWord.length > longestSoFar.length ? currentWord : longestSoFar;
  }, '');

  return longest;
}

// 🧪 Test Cases
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
console.log(longestWord("Hi, I am Jeevan."));                            // "Jeevan"
console.log(longestWord("A small sentence."));                           // "sentence"
console.log(longestWord("Supercalifragilisticexpialidocious is a word")); // "Supercalifragilisticexpialidocious"
console.log(longestWord("..."));                                         // ""
console.log(longestWord(""));                                            // ""

/**
 * 🧠 Explanation:
 * - First we remove all punctuation marks using regex: [^\w\s]
 * - Then we split the sentence by spaces.
 * - Finally we use `reduce()` to find the word with the maximum length.
 * 
 * ⚠️ Edge Cases:
 * - Empty strings → return ""
 * - Only punctuation → return ""
