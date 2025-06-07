/*
📘 Problem 04: Flatten a Nested Object

Given a deeply nested object, flatten it such that each key is a path joined by dots (`.`).

✅ Your Task:
- Write a function to recursively flatten the object.
- Return a new object with dot-notated keys and corresponding values.

🔍 Example:
const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

✅ Expected Output:
{
  'a': 1,
  'b.c': 2,
  'b.d.e': 3
}

💡 Explanation:
We use recursion to explore each key. When we hit a primitive value, we add it to the result with a path.
*/

const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

// ✅ Recursive Solution
const flattenObject = (obj, prefix = '', result = {}) => {
  for (let key in obj) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], path, result);
    } else {
      result[path] = obj[key];
    }
  }
  return result;
};

console.log('flattenObject:', flattenObject(input));
