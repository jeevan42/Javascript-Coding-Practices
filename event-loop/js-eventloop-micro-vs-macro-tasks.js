/**
 * 🌀 Event Loop: Microtasks vs Macrotasks
 *
 * JavaScript is single-threaded, but asynchronous operations are managed via the Event Loop.
 * Two main queues exist for asynchronous tasks: **Macrotask queue** and **Microtask queue**.
 *
 * 🔍 Microtasks:
 * - Executed *after* the currently executing script and *before* the next macrotask.
 * - Examples: `Promise.then`, `Promise.catch`, `Promise.finally`, `MutationObserver`, `queueMicrotask`
 *
 * 🔍 Macrotasks:
 * - Scheduled to run *after* microtasks are cleared.
 * - Examples: `setTimeout`, `setInterval`, `setImmediate`, `I/O callbacks`, `UI rendering`
 *
 * ✅ Execution Order Rule:
 * 1. Execute current stack.
 * 2. Flush all microtasks.
 * 3. Run next macrotask (then repeat).
 */

// ==============================
// Example: Microtask vs Macrotask
// ==============================
console.log("Script Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

queueMicrotask(() => {
  console.log("Microtask: queueMicrotask");
});

console.log("Script End");

// ✅ Output order:
// Script Start
// Script End
// Microtask: Promise.then
// Microtask: queueMicrotask
// Macrotask: setTimeout

// ===========================================
// Example: Microtask Queue Blocks Macrotasks
// ===========================================
console.log("Start");

setTimeout(() => {
  console.log("Macrotask 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 1");
}).then(() => {
  console.log("Microtask 2");
}).then(() => {
  console.log("Microtask 3");
});

console.log("End");

// ✅ Output:
// Start
// End
// Microtask 1
// Microtask 2
// Microtask 3
// Macrotask 1

// ========================
// 🧠 Summary
// ========================
// - Microtasks have higher priority over macrotasks.
// - Microtasks are executed immediately after the current task finishes.
// - Macrotasks are queued to execute in the next cycle of the event loop.
// - Heavy microtask chaining can delay macrotasks.
// - Use `Promise.then()` or `queueMicrotask()` for short, quick follow-ups.
// - Use `setTimeout()` or `setInterval()` for deferred execution.
