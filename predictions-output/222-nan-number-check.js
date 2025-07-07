// 🧠 NaN is not equal to itself

const x = NaN;
console.log(x === NaN); // ❌ false
console.log(Number.isNaN(x)); // ✅ true