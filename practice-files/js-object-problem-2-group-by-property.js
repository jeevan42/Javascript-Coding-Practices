/*
📘 Problem: Group array of objects by a property (e.g., role).

const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

✅ Solution:
const grouped = {};

for (let person of people) {
  if (!grouped[person.role]) grouped[person.role] = [];
  grouped[person.role].push(person);
}

console.log(grouped);
//
//{
//  admin: [ { name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' } ],
//  user: [ { name: 'Bob', role: 'user' } ]
//}
//

📌 Explanation: Grouped using dynamic keys.
*/
