/*
📘 Problem 24: Deep Freeze Object

✅ Description:
Recursively freeze an object and all its nested properties.

📌 Concept:
Use Object.freeze + recursion on nested values.
*/

const deepFreeze = (obj) => {
  Object.freeze(obj);
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
};

const frozen = deepFreeze({ a: { b: 1 } });
// frozen.a.b = 5 will fail silently in strict mode
