// File: create-nested-object.js

/*
📘 Problem: Create a nested object structure from a dot-separated string path and assign a value.

Concept:
- Useful for dynamic object creation or updating deeply nested data safely.

Example:
createNestedObject('a.b.c', 5);

// Expected output:
{ a: { b: { c: 5 } } }
*/

// Solution:
const createNestedObject = (path, value) => {
  const keys = path.split('.');
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    // If it's last key, assign value
    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = {};
      current = current[key];
    }
  }
  return result;
};

// Example usage:
console.log(createNestedObject('a.b.c', 5));
