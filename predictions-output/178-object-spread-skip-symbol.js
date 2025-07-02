// 🧠 Spread does not copy symbol properties

const sym = Symbol("secret");
const obj = { [sym]: "hidden", x: 1 };
const clone = { ...obj };

console.log(clone[sym]); // ❌ undefined
console.log(clone.x);    // ✅ 1