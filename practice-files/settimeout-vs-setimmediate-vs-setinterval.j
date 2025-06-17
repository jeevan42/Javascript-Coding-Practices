/**
 * ⏱️ setTimeout vs setImmediate vs setInterval
 * 
 * These are all macrotask-based timers used to schedule code execution.
 * But they differ in *timing*, *purpose*, and *use cases*.
 *
 * ✅ setTimeout(fn, delay)
 * - Executes the function **once** after at least the specified delay (in ms).
 * - Delay is minimum, not exact.
 * - Browser & Node.js supported.
 *
 * ✅ setInterval(fn, interval)
 * - Repeatedly executes the function after every `interval` ms.
 * - Not precise for timing due to blocking & drift.
 * - Browser & Node.js supported.
 *
 * ✅ setImmediate(fn)
 * - Executes the function **once** after the current event loop phase completes.
 * - Not part of standard JS – only available in **Node.js**.
 * - Fires **before** `setTimeout(fn, 0)` in most cases.
 */

// ======================
// 🧪 Example: setTimeout
// ======================
console.log("Before setTimeout");

setTimeout(() => {
  console.log("setTimeout called");
}, 0); // Will run after current stack + microtasks

console.log("After setTimeout");

// ======================
// 🧪 Example: setInterval
// ======================
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);
  if (count === 3) clearInterval(intervalId);
}, 1000); // Runs every 1 second

// ======================
// 🧪 Example: setImmediate (Node.js Only)
// ======================
/**
 * Only works in Node.js — not in browsers!
 * Useful to run code **immediately after** the current I/O events.
 */
if (typeof setImmediate !== "undefined") {
  console.log("Before setImmediate");

  setImmediate(() => {
    console.log("Inside setImmediate");
  });

  console.log("After setImmediate");
}

// ========================
// ⚖️ Key Differences Table
// ========================
/**
| Feature         | setTimeout        | setInterval        | setImmediate (Node.js) |
|----------------|-------------------|--------------------|------------------------|
| Runs Once      | ✅                | ❌ (repeats)       | ✅                     |
| Runs Repeatedly| ❌                | ✅                 | ❌                     |
| Delay          | >= specified ms   | >= interval ms     | After current phase    |
| Browser Support| ✅                | ✅                 | ❌ (Node.js only)       |
*/

// ========================
// 📌 Summary
// ========================
// - Use `setTimeout` for delaying a task.
// - Use `setInterval` for repeating a task (but not accurate for timers).
// - Use `setImmediate` in Node.js to defer execution after the current phase.
// - All are macrotasks (executed after microtasks complete).
