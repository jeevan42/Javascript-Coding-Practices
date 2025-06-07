/*
📘 Problem 13: Invert Keys and Values

Write a function to swap keys and values in an object.

🔍 Example:
Input: { a: 1, b: 2, c: 3 }
Output: { 1: 'a', 2: 'b', 3: 'c' }

💡 Note: All values must be primitive and unique.
*/

const invertObject = (obj) => {
  const inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
};

const original = { a: 1, b: 2, c: 3 };
console.log('Inverted Object:', invertObject(original));
