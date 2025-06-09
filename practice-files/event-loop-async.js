/**
 * 🧠 Concept: JavaScript Event Loop & Asynchronous Behavior
 *
 * 📘 Definition:
 * JavaScript runs on a single thread but handles async operations with an event loop,
 * allowing non-blocking I/O by deferring tasks to the callback queue and microtask queue.
 *
 * ---------------------------------------------------------
 *
 * 1️⃣ Call Stack:
 * - Where functions are pushed and popped during execution.
 * - JS executes functions one by one.
 *
 * 2️⃣ Web APIs (Browser) / Node APIs:
 * - APIs provided by environment to handle async tasks (timers, HTTP requests).
 *
 * 3️⃣ Callback Queue (Task Queue):
 * - Queue where async callbacks (like setTimeout) wait after their timer expires.
 *
 * 4️⃣ Microtask Queue:
 * - Higher priority queue where Promises `.then` callbacks and `process.nextTick` run.
 * - Executes after current call stack clears, before callback queue.
 *
 * 5️⃣ Event Loop:
 * - Continuously checks call stack.
 * - If empty, first empties microtask queue, then executes callbacks from callback queue.
 *
 * ---------------------------------------------------------
 *
 * 🔥 Example to understand order of execution:
 */

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise then 1");
  })
  .then(() => {
    console.log("Promise then 2");
  });

console.log("End");

/**
 * Expected output:
 * Start
 * End
 * Promise then 1
 * Promise then 2
 * setTimeout callback
 *
 * Explanation:
 * - "Start" and "End" run immediately in call stack.
 * - Promise.then callbacks go to microtask queue, run after call stack empties.
 * - setTimeout callback goes to callback queue, runs after microtasks finish.
 *
 * ---------------------------------------------------------
 *
 * 6️⃣ Real World Implication:
 * - Microtasks run before any rendering or other I/O.
 * - Helps maintain responsiveness.
 * - Prevents blocking UI.
 *
 * ---------------------------------------------------------
 *
 * 7️⃣ Using async/await (built on Promises)
 */
async function asyncFunc() {
  console.log("Async function start");
  await Promise.resolve();
  console.log("Async function end");
}

asyncFunc();

console.log("After async function");

/**
 * Expected output:
 * Async function start
 * After async function
 * Async function end
 *
 * Explanation:
 * - asyncFunc starts, logs immediately.
 * - `await` pauses asyncFunc, resumes in microtask queue.
 * - "After async function" logs.
 * - Then asyncFunc resumes and logs last message.
 */

/**
 * ---------------------------------------------------------
 *
 * 🔥 Summary:
 * - JS is single-threaded but async using event loop.
 * - Call stack, microtask queue, callback queue interact for execution order.
 * - Promises and async/await use microtasks, higher priority than setTimeout.
 * - Understanding event loop avoids tricky bugs and performance issues.
 */
