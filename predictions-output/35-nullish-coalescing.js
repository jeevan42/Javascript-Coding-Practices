// 🧠 Nullish Coalescing (??)

let name = null;
let display = name ?? "Guest";
console.log(display); 
// ✅ Guest

let age = 0;
console.log(age ?? 18); 
// ✅ 0
// 🧠 Unlike `||`, `??` only checks for null or undefined
