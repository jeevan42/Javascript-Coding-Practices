/*
📘 Problem 27: Sort Object by Values

✅ Description:
Return a new object sorted by its values.

📌 Concept:
Convert to entries, sort, then back to object.
*/

const sortObjectByValue = (obj) => Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]));

console.log(sortObjectByValue({ a: 3, b: 1, c: 2 })); // { b:1, c:2, a:3 }
