// 🧠 Named vs anonymous functions

const a = function hello() {};
const b = function () {};
const c = () => {};

console.log(a.name); // ✅ "hello"
console.log(b.name); // ✅ "b"
console.log(c.name); // ✅ "c"

// 🧠 JS infers names based on assignment