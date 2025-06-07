// File: capitalize-keys.js

/*
📘 Problem: Return a new object with all keys capitalized.

Concept:
- Sometimes used for formatting or standardizing keys.

Example:
{ name: 'Alice', age: 25 } -> { NAME: 'Alice', AGE: 25 }
*/

// Solution:
const capitalizeKeys = (obj) => {
  const result = {};
  for (const key in obj) {
    result[key.toUpperCase()] = obj[key];
  }
  return result;
};

// Example usage:
const user = { name: 'Alice', age: 25 };
console.log(capitalizeKeys(user));
