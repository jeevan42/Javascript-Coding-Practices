// 🧠 Destructuring undefined vars

const obj = { a: 1 };
const { a, b = 2 } = obj;

console.log(a); // ✅ 1
console.log(b); // ✅ 2 (default works)

// ⚠️ If you try destructuring `undefined`, it crashes
const undef = undefined;
// const { x } = undef; // ❌ TypeError