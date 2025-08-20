// Question: What does throttle do?
function throttle(fn, delay) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}
const log = throttle(() => console.log("Scroll!"), 1000);
log();
log();
log();

// Answer: "Scroll!" (only once within 1 second)
// Explanation: Throttle limits function execution to once per interval.