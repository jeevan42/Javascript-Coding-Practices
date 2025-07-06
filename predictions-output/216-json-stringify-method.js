// 🧠 `JSON.stringify` skips functions & symbols

const obj = {
  a: 1,
  fn: () => {},
  [Symbol('sym')]: 2
};

console.log(JSON.stringify(obj)); // ✅ {"a":1}