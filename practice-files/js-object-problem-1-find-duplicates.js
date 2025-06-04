/*
📘 Problem: Given an array of objects, find duplicate entries by a specific key.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
];

✅ Solution:
const nameMap = {};
const duplicates = [];

for (let user of users) {
  if (nameMap[user.name]) {
    duplicates.push(user);
  } else {
    nameMap[user.name] = true;
  }
}

console.log(duplicates); // [{ id: 3, name: "Alice" }]

📌 Explanation: Used object as a map to track seen names.
*/
