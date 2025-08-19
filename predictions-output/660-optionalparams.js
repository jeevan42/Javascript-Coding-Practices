// Question: What will this output?
function multiply(a, b) {
  return a * (b || 1);
}
console.log(multiply(5));
console.log(multiply(5, 2));

// Answer:
// 5
// 10
// Explanation: If `b` is missing, it defaults to 1 using logical OR.