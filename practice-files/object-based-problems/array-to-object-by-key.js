// File: array-to-object-by-key.js

/*
📘 Problem: Convert an array of objects into a single object,
using a specified key from each object as the new object's key.

Concept:
- This is useful when you want to quickly lookup objects by a unique key.
- Instead of looping every time to find an object, you transform the array into an object map.

Example:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Expected output:
{
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" }
}
*/

// Solution:
const arrayToObjectByKey = (arr, key) => {
  const result = {};
  for (const item of arr) {
    // Use the value at 'key' as the new object's key
    result[item[key]] = item;
  }
  return result;
};

// Example usage:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
console.log(arrayToObjectByKey(users, "id"));

