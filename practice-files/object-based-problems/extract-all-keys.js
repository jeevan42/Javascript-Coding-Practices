/*
📘 Problem 10: Get All Keys from Nested Object

Write a function to extract all keys (including nested ones) from an object.

🔍 Example:
Input: { a: 1, b: { c: 2, d: { e: 3 } } }
Output: ['a', 'b', 'c', 'd', 'e']
*/

const extractAllKeys = (obj) => {
  let keys = [];

  for (let key in obj) {
    keys.push(key);
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(extractAllKeys(obj[key]));
    }
  }

  return keys;
};

const nested = { a: 1, b: { c: 2, d: { e: 3 } } };

console.log('All Keys:', extractAllKeys(nested));
