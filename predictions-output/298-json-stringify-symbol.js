// 🧠 `JSON.stringify` ignores Symbol keys

const obj = {
  [Symbol("secret")]: 123,
  name: "JS"
};

console.log(JSON.stringify(obj)); // ✅ {"name":"JS"}