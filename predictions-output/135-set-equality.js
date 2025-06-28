// 🧠 Sets are reference-based

const s1 = new Set([1, 2]);
const s2 = new Set([1, 2]);

console.log(s1 === s2); // ❌ false

// 🧠 Different instances → not equal