// 🧠 Promise Execution Order

console.log("Start");

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// ✅ Output:
// Start
// End
// Promise 1
// Promise 2
// 🧠 Promises are queued in the microtask queue, executed after sync
