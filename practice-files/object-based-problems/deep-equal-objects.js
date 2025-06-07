/*
📘 Problem 08: Compare Two Objects for Deep Equality

Check if two objects have the same keys and values, even nested ones.

🔍 Example:
Input:
  obj1 = { a: 1, b: { c: 2 } }
  obj2 = { a: 1, b: { c: 2 } }

Output: true
*/

const deepEqual = (a, b) => {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

console.log('Deep Equal:', deepEqual(obj1, obj2)); // true
