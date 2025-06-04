/*
📘 Problem: Iterate over object properties.

const obj = { name: "John", age: 30, city: "Delhi" };

✅ Solution:
- for...in
for (let key in obj) {
  console.log(key, obj[key]);
}

- Object.keys()
Object.keys(obj).forEach(key => console.log(key, obj[key]));

- Object.entries()
Object.entries(obj).forEach(([key, value]) => console.log(key, value));

📌 Use entries() for both key & value.
*/
