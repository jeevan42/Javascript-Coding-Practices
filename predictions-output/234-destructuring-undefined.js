// 🧠 Destructuring undefined throws error

const obj = undefined;
// const { x } = obj; // ❌ TypeError

const safe = obj?.x;
console.log(safe); // ✅ undefined (with optional chaining)