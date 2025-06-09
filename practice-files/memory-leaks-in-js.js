/**
 * 🧠 Concept: Memory Leaks in JavaScript
 * 
 * 📘 Definition:
 * Memory leak happens when your program holds references to objects that are no longer needed,
 * preventing garbage collection, leading to increased memory usage and possible performance issues.
 * 
 * 🔥 Why it matters:
 * - Causes apps/websites to slow down or crash.
 * - Especially critical in long-running applications.
 * 
 * ---------------------------------------------------------
 * 
 * 1️⃣ Common Causes of Memory Leaks:
 * 
 * a) **Global Variables** (accidental)
 *    - Variables declared without var/let/const become global.
 * 
 * b) **Forgotten Timers or Callbacks**
 *    - setInterval or setTimeout not cleared.
 * 
 * c) **Closures holding references**
 *    - Functions remembering outer variables unnecessarily.
 * 
 * d) **Detached DOM Nodes**
 *    - Nodes removed from DOM but still referenced in JS.
 * 
 * e) **Caching without limits**
 *    - Storing huge data without cleanup.
 * 
 * ---------------------------------------------------------
 * 
 * 2️⃣ Examples:
 * 
 * a) Global Variable Leak
 */
function globalLeak() {
  leakedVar = "I'm global accidentally!"; // No var/let/const, leaks to global scope
}
globalLeak();
console.log(leakedVar); // "I'm global accidentally!"
// This variable stays in memory as long as app runs

/**
 * b) Forgotten Timer
 */
function forgottenTimer() {
  const intervalId = setInterval(() => {
    console.log("I'm running forever!");
  }, 1000);

  // Oops! No clearInterval called anywhere
}
// forgottenTimer(); // Don't run this or clearInterval needed

/**
 * c) Closure Leak
 */
function closureLeak() {
  const bigData = new Array(1000000).fill('*');

  return function inner() {
    console.log(bigData.length); // bigData stays in memory as long as inner exists
  };
}

const leakFn = closureLeak();
// If leakFn stays referenced, bigData is not freed.

/**
 * d) Detached DOM Nodes
 */
// Suppose you remove DOM node but keep reference
let detachedNode;
function createAndDetach() {
  const el = document.createElement('div');
  document.body.appendChild(el);
  detachedNode = el; 
  document.body.removeChild(el); // Node removed from DOM but still referenced by detachedNode
}
// createAndDetach();

/**
 * 3️⃣ How to Detect Memory Leaks
 * 
 * - Use browser DevTools Memory tab (Chrome/Firefox)
 * - Take heap snapshots and compare
 * - Look for detached DOM nodes or increasing memory over time
 * 
 * ---------------------------------------------------------
 * 
 * 4️⃣ How to Prevent Memory Leaks:
 * 
 * - Always declare variables with var/let/const
 * - Clear timers/intervals when not needed (`clearTimeout`, `clearInterval`)
 * - Nullify references if no longer needed
 * - Avoid keeping large objects in closures unnecessarily
 * - Be careful with event listeners: remove them when done
 * - Use WeakMap or WeakSet for caches to allow GC
 * 
 * ---------------------------------------------------------
 * 
 * 🔥 Summary:
 * Memory leaks hurt performance and are avoidable with good coding practices.
 * Regularly profile and monitor memory usage in your apps.
 */
