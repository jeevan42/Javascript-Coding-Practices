/*
📘 Problem: Remove keys with undefined, null, or empty string from an object

const input = { a: 1, b: "", c: null, d: 4, e: undefined };

✅ Solution:
const cleaned = Object.fromEntries(
  Object.entries(input).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
);

console.log(cleaned); // { a: 1, d: 4 }
*/
