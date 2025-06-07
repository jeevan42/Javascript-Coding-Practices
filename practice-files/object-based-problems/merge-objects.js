/*
📘 Problem 09: Merge Two Objects (Shallow + Deep)

Write functions to:
1️⃣ Merge two objects shallowly.
2️⃣ Merge two objects deeply.

🔍 Example:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

✅ Shallow Merge:
{ a: 1, b: { d: 3 }, e: 4 }

✅ Deep Merge:
{ a: 1, b: { c: 2, d: 3 }, e: 4 }
*/

const shallowMerge = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const deepMerge = (obj1, obj2) => {
  const result = { ...obj1 };
  for (let key in obj2) {
    if (
      obj2.hasOwnProperty(key) &&
      typeof obj2[key] === 'object' &&
      !Array.isArray(obj2[key]) &&
      obj2[key] !== null
    ) {
      result[key] = deepMerge(result[key] || {}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
};

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

console.log('Shallow Merge:', shallowMerge(obj1, obj2));
console.log('Deep Merge:', deepMerge(obj1, obj2));
