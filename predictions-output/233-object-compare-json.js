// 🧠 Compare objects using `JSON.stringify` (not ideal, order matters)

const a = { x: 1, y: 2 };
const b = { y: 2, x: 1 };

console.log(JSON.stringify(a) === JSON.stringify(b)); // ❌ false