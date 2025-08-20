// Question: Why is this pure?
function square(n) {
  return n * n;
}
console.log(square(4));
console.log(square(4));

// Answer: 16, 16
// Explanation: Pure function always produces same output for same input without side effects.