// 🧠 `undefined` is skipped in JSON.stringify

const obj = { a: 1, b: undefined };

console.log(JSON.stringify(obj)); // ✅ '{"a":1}'