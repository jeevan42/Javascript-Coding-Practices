// Question: What does memoized function do?
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
const square = memoize(x => x * x);
console.log(square(5));
console.log(square(5));

// Answer: 25, 25
// Explanation: The second call uses cached value, avoiding recomputation.