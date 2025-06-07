// File: object-path-accessor.js

/*
📘 Problem: Implement functions to get and set nested object
properties dynamically using a string path.

Concept:
- Access or update deeply nested properties without manual checks.
- Paths are strings like "user.address.city".
- Useful for dynamic data manipulation or form libraries.

Example:
const obj = { user: { address: { city: "NY" } } };

get(obj, "user.address.city"); // "NY"
set(obj, "user.address.city", "LA");
get(obj, "user.address.city"); // "LA"
*/

// Solution:

// Get nested value safely
function get(obj, path) {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current == null) return undefined;
    current = current[key];
  }
  return current;
}

// Set nested value, create missing objects along the path
function set(obj, path, value) {
  const keys = path.split(".");
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!(key in current) || typeof current[key] !== "object") {
        current[key] = {};
      }
      current = current[key];
    }
  });
}

// Example usage:
const obj = {};
set(obj, "user.address.city", "NY");
console.log(get(obj, "user.address.city")); // "NY"

set(obj, "user.address.city", "LA");
console.log(get(obj, "user.address.city")); // "LA"

console.log(get(obj, "user.phone.number")); // undefined
