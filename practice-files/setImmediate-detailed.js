/**
 * ⚡ What is setImmediate?
 * 
 * `setImmediate()` is a **Node.js-specific API** that defers the execution of a function
 * until the **current event loop phase** (poll phase) completes.
 *
 * 🧠 It is part of the macrotask queue — but runs **before setTimeout(fn, 0)** most of the time.
 * 
 * ❗ Not available in browsers!
 * 
 * ✅ Syntax:
 * setImmediate(callback[, ...args])
 * 
 * 🚀 Interview Answer:
 * > "`setImmediate()` schedules code to execute **immediately after** the current event loop iteration,
 * unlike `setTimeout(fn, 0)` which waits for a minimum of 1ms. It's often used to break up long tasks,
 * avoid blocking, or to defer execution until I/O is complete."
 */

// ===================================
// Example 1: Basic Usage of setImmediate
// ===================================
console.log("Start");

setImmediate(() => {
  console.log("✅ Inside setImmediate");
});

console.log("End");

// ✅ Output:
// Start
// End
// ✅ Inside setImmediate

// ===========================================
// Example 2: Difference between setImmediate & setTimeout
// ===========================================
setTimeout(() => {
  console.log("⏱️ setTimeout");
}, 0);

setImmediate(() => {
  console.log("⚡ setImmediate");
});

// ✅ Output order is **not guaranteed**, depends on system & phase timing.
// In Node.js, usually:
// ⚡ setImmediate
// ⏱️ setTimeout

// ===================================
// Example 3: setImmediate with I/O (REAL use case)
// ===================================

const fs = require("fs");

fs.readFile(__filename, () => {
  // Inside poll phase (after file read)
  setTimeout(() => {
    console.log("⏱️ Timeout after I/O");
  }, 0);

  setImmediate(() => {
    console.log("⚡ Immediate after I/O");
  });
});

// ✅ Output:
// ⚡ Immediate after I/O
// ⏱️ Timeout after I/O

// 🔍 Explanation:
// In I/O callbacks, `setImmediate()` is executed before `setTimeout()`.


// ========================================
// Real-World Use Cases of setImmediate()
// ========================================

/**
 * 1. 🧩 Break up Long Synchronous Tasks:
 *    - Prevents blocking the event loop.
 *    - Split computation-heavy operations.
 */

function longTask() {
  let i = 0;
  function repeat() {
    while (i < 1e7) {
      i++;
      if (i % 1e6 === 0) console.log("Chunk:", i);
    }
    console.log("✅ Done!");
  }

  setImmediate(repeat);
}

longTask(); // Prevents blocking if used inside real server logic

/**
 * 2. 📦 In Real Projects (Node.js backend):
 *    - Used to defer logging/debug operations.
 *    - To run a function after current request processing completes.
 *    - In file systems, HTTP servers, and queue workers.
 */

// Example: HTTP server with deferred logging
const http = require("http");

http.createServer((req, res) => {
  res.end("Hello, World!");

  setImmediate(() => {
    console.log(`🔍 Logging: ${req.method} ${req.url}`);
  });
}).listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

// ========================
// 🧠 Summary (Bullet Points)
// ========================
/**
 * - ✅ Node.js-only: Not available in browsers.
 * - ✅ Defers execution until after the current poll phase.
 * - ✅ Often faster than setTimeout(fn, 0) inside I/O callbacks.
 * - ✅ Helps in non-blocking programming (e.g., deferring logs, chunking large tasks).
 * - ❗ Use wisely — do not overuse or nest too deeply.
 */

// ========================
// 🧪 Tip for Interviews
// ========================
/**
 * > Prefer `setImmediate()` when you want to run something **after I/O** or **after the current phase**
 *   — it’s a cleaner choice for deferring tasks in event-driven Node.js systems.
 */
