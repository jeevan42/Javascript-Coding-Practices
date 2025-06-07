// File: max-value-in-object.js

/*
📘 Problem: Find the key with the maximum numeric value in an object.

Concept:
- Useful for determining best scores, max metrics, etc.

Example:
const scores = { math: 90, science: 95, english: 85 };

// Expected output:
'science'
*/

// Solution:
const maxValueKey = (obj) => {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
};

// Example usage:
const scores = { math: 90, science: 95, english: 85 };
console.log(maxValueKey(scores));
