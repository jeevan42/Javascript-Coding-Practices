// 🧠 RegExp: literal vs constructor

const a = /abc/;
const b = new RegExp("abc");

console.log(a.test("abc")); // ✅ true
console.log(b.test("abc")); // ✅ true

// 🧠 Useful when building dynamic patterns