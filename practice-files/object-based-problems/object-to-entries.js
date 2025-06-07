/*
📘 Problem 19: Convert Object to Array of Keys & Values

✅ Description:
Convert an object into an array of key-value pairs.

🔍 Example:
Input: { a: 1, b: 2 }
Output: [['a', 1], ['b', 2]]

📌 Concept:
Use Object.entries() to convert.
*/

const toEntries = (obj) => Object.entries(obj);

console.log(toEntries({ a: 1, b: 2 }));
