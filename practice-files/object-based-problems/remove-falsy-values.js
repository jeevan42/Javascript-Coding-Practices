/*
📘 Problem 23: Remove Falsy Values from Object

✅ Description:
Filter out properties with falsy values (false, 0, '', null, undefined, NaN).

🔍 Example:
Input: { a: 0, b: false, c: 1 }
Output: { c: 1 }

📌 Concept:
Use Object.entries() with filter + fromEntries.
*/

const removeFalsy = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));

console.log(removeFalsy({ a: 0, b: false, c: 1 }));
