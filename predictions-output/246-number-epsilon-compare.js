// 🧠 Use `Number.EPSILON` to compare floats

const a = 0.1 + 0.2;
console.log(Math.abs(a - 0.3) < Number.EPSILON); // ✅ true