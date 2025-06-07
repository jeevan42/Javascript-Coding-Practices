// File: get-nested-value.js

/*
📘 Problem: Safely access a nested value from an object using a dot-separated path.

Concept:
- Prevents errors when accessing properties on undefined or null.

Example:
const data = { a: { b: { c: 42 } } };

getNestedValue(data, 'a.b.c'); // 42
getNestedValue(data, 'a.b.x'); // undefined
*/

// Solution:
const getNestedValue = (obj, path) => {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
};

// Example usage:
const data = { a: { b: { c: 42 } } };
console.log(getNestedValue(data, 'a.b.c')); // 42
console.log(getNestedValue(data, 'a.b.x')); // undefined
