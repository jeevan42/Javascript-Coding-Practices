// 🧠 Temporal Dead Zone (TDZ)

console.log(a); // ❌ ReferenceError
let a = 5;

// 🧠 `let` and `const` are hoisted but not initialized
// Accessing them before declaration causes ReferenceError
