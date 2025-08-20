// Question: What does debounce do?
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
const log = debounce(() => console.log("Typed!"), 300);
log();
log();
log();

// Answer: "Typed!" (only once, after 300ms inactivity)
// Explanation: Debounce delays function execution until no calls happen for delay time.