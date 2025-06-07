/*
📘 Problem 16: Count Character Frequency in a String using Object

Write a function that returns a character frequency map for a string.

🔍 Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

💡 Use object to count each character
*/

const charFrequency = (str) => {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
};

console.log('Frequency:', charFrequency("hello world"));
