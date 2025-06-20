// 🧠 Array fill and reference trap

const arr = new Array(3).fill({ name: "Jeevan" });
arr[0].name = "G1";

console.log(arr);
// ❌ [{ name: "G1" }, { name: "G1" }, { name: "G1" }]

// 🧠 EXPLANATION:
// .fill(obj) doesn't clone the object — it copies the same reference.
// All 3 indexes point to the SAME object in memory.

// Proof:
console.log(arr[0] === arr[1]); // ✅ true
console.log(arr[1] === arr[2]); // ✅ true

// ✅ THE FIX: Use .map() to create distinct objects
const fixed = new Array(3).fill().map(() => ({ name: "Jeevan" }));
fixed[0].name = "G1";

console.log(fixed);
// ✅ [{ name: "G1" }, { name: "Jeevan" }, { name: "Jeevan" }]
