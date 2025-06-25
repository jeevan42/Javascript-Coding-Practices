// 🧠 setTimeout(..., 0) still runs **after** current call stack

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

// ✅ Output: A → C → B