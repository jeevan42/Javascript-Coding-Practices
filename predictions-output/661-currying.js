// Question: What will this log?
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(5)(3));

// Answer: 8
// Explanation: Currying transforms a multi-argument function into nested single-argument functions.