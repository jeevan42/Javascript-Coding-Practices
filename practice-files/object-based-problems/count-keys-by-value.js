// File: count-keys-by-value.js

/*
📘 Problem: Count how many keys in an object have a certain value.

Concept:
- Often used in surveys, votes, or classifications where values represent categories.
- Counting occurrences helps summarize the data.

Example:
const votes = { alice: 'yes', bob: 'no', charlie: 'yes' };

// Count how many voted 'yes':
// Expected output: 2
*/

// Solution:
const countKeysByValue = (obj, valueToCount) => {
  let count = 0;
  for (const key in obj) {
    if (obj[key] === valueToCount) {
      count++;
    }
  }
  return count;
};

// Example usage:
const votes = { alice: 'yes', bob: 'no', charlie: 'yes' };
console.log(countKeysByValue(votes, 'yes')); // Output: 2
