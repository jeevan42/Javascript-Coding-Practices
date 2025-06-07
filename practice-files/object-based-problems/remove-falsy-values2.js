// File: remove-falsy-values.js

/*
📘 Problem: Remove all key-value pairs from an object where the value is falsy.
// Falsy values include: false, 0, '', null, undefined, NaN

Concept:
- Useful for cleaning objects before processing or sending data.
- This helps avoid processing meaningless or empty values.

Example:
const obj = { a: 1, b: null, c: '', d: 4 };

// Expected output:
{ a: 1, d: 4 }
*/

// Solution:
const removeFalsyValues = (obj) => {
  const result = {};
  for (const key in obj) {
    if (obj[key]) { // only keep truthy values
      result[key] = obj[key];
    }
  }
  return result;
};

// Example usage:
const sample = { a: 1, b: null, c: '', d: 4 };
console.log(removeFalsyValues(sample));
