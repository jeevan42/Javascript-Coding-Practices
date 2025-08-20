// Question: Why is this impure?
let count = 0;
function increment() {
  count++;
  return count;
}
console.log(increment());
console.log(increment());

// Answer: 1, 2
// Explanation: Function relies on and mutates external state → impure.