/*
📘 Problem 25: Check if Two Objects Have Same Keys

✅ Description:
Check whether two objects have the exact same keys.

📌 Concept:
Get sorted keys and compare.
*/

const sameKeys = (obj1, obj2) => {
  const k1 = Object.keys(obj1).sort();
  const k2 = Object.keys(obj2).sort();
  return JSON.stringify(k1) === JSON.stringify(k2);
};

console.log(sameKeys({ a: 1, b: 2 }, { b: 3, a: 4 })); // true
