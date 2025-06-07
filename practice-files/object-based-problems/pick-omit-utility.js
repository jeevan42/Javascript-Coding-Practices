/*
📘 Problem 14: Pick & Omit Utility Functions (Like Lodash)

Write two functions:
- pick(obj, keys): returns a new object with only specified keys.
- omit(obj, keys): returns a new object excluding specified keys.

🔍 Example:
Input obj = { name: "Alice", age: 25, city: "Delhi" }
pick(obj, ["name", "city"]) → { name: "Alice", city: "Delhi" }
omit(obj, ["age"]) → { name: "Alice", city: "Delhi" }
*/

const pick = (obj, keys) => {
  const result = {};
  for (let key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
};

const omit = (obj, keys) => {
  const result = {};
  for (let key in obj) {
    if (!keys.includes(key)) result[key] = obj[key];
  }
  return result;
};

const person = { name: "Alice", age: 25, city: "Delhi" };
console.log('Pick:', pick(person, ['name', 'city']));
console.log('Omit:', omit(person, ['age']));
