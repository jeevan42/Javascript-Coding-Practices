/*
📘 Problem: Check if two objects are deeply equal

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

✅ Solution:
function isEqual(o1, o2) {
  return JSON.stringify(o1) === JSON.stringify(o2);
}

console.log(isEqual(obj1, obj2)); // true

📌 Caveat: Doesn't work well with functions, dates, or undefined.
Use lodash.isEqual for production.
*/
