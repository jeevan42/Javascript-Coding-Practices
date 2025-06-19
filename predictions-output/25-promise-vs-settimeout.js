// 🧠 setTimeout vs Promise Microtask Order

setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("Sync");

// ✅ Output:
// Sync
// Promise
// setTimeout
