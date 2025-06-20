// 🧠 Array fill and reference trap

const arr = new Array(3).fill({ name: "Jeevan" });
arr[0].name = "G1";

console.log(arr); 
// ✅ [{ name: "G1" }, { name: "G1" }, { name: "G1" }]

// 🧠 fill copies object reference, not clone.
// All elements point to the same object.
