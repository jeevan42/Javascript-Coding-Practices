/*
📘 Problem: Merge two objects

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

✅ Solution:
const merged = { ...obj1, ...obj2 }; // b: 3 overrides b: 2

✅ Alternate:
Object.assign({}, obj1, obj2);

📌 Later properties override earlier ones.
*/
