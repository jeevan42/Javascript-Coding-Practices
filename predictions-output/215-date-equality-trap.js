// 🧠 Two Dates are never equal by reference

const a = new Date();
const b = new Date(a);

console.log(a === b); // ❌ false