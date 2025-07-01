// 🧠 Use replacer in JSON.stringify to filter keys

const obj = { a: 1, b: 2, secret: 3 };
const str = JSON.stringify(obj, (key, val) =>
  key === "secret" ? undefined : val
);

console.log(str); // ✅ {"a":1,"b":2}