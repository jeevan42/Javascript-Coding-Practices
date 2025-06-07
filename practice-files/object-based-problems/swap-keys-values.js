// File: swap-keys-values.js

/*
📘 Problem: Swap keys and values in an object.
// Only swap if values are unique and valid keys (strings/numbers).

Concept:
- Sometimes used to reverse mappings or create lookup tables.

Example:
const obj = { a: 1, b: 2 };

// Expected output:
{ 1: 'a', 2: 'b' }
*/

// Solution:
const swapKeysValues = (obj) => {
  const swapped = {};
  for (const key in obj) {
    const val = obj[key];
    // Only swap if val is string or number (valid key) and unique
    if ((typeof val === 'string' || typeof val === 'number') && !(val in swapped)) {
      swapped[val] = key;
    }
  }
  return swapped;
};

// Example usage:
const obj = { a: 1, b: 2, c: 'hello' };
console.log(swapKeysValues(obj));
