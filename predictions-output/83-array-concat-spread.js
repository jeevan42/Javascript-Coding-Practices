// 🧠 .concat vs spread operator for arrays

const a = [1];
const b = [2];
const c1 = a.concat(b);
const c2 = [...a, ...b];

console.log(c1); // ✅ [1, 2]
console.log(c2); // ✅ [1, 2]

// 🧠 Both work, but spread is more flexible with nested arrays