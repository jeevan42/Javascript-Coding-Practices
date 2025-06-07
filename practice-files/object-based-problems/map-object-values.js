/*
📘 Problem 30: Apply Function to All Values in Object

✅ Description:
Transform each value using a custom callback function.
*/

const mapObjectValues = (obj, fn) => {
  return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, fn(val)]));
};

console.log(mapObjectValues({ a: 2, b: 3 }, x => x * 10)); // { a: 20, b: 30 }
