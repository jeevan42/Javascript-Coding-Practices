/*
📘 Problem 12: Remove Keys from Object

Given an object and an array of keys, return a new object without those keys.

🔍 Example:
Input:
obj = { name: 'Alice', age: 25, city: 'Delhi' }
keysToRemove = ['age', 'city']

Output: { name: 'Alice' }
*/

const removeKeys = (obj, keysToRemove) => {
  const result = {};
  for (let key in obj) {
    if (!keysToRemove.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

const obj = { name: 'Alice', age: 25, city: 'Delhi' };
const keysToRemove = ['age', 'city'];

console.log('After Removal:', removeKeys(obj, keysToRemove));
