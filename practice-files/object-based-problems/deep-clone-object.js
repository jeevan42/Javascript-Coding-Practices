/*
📘 Problem 05: Deep Clone an Object

Create a deep copy of an object so that nested values are not linked to the original.

🔍 Example:
const original = {
  a: 1,
  b: {
    c: 2
  }
};

const clone = deepClone(original);
clone.b.c = 100;

Expected:
original.b.c // still 2
*/

const original = {
  a: 1,
  b: {
    c: 2
  }
};

// ✅ Deep Clone using recursion
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const clone = {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
};

const cloned = deepClone(original);
cloned.b.c = 100;

console.log('original:', original);
console.log('cloned:', cloned);
