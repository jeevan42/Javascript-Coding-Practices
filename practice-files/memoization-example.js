/**
 * ⚡️ Concept: Memoization in JavaScript
 *
 * 📘 Definition:
 *   Memoization is a technique to optimize function calls by **caching results** of expensive function calls
 *   so that future calls with the same arguments return instantly.
 *
 * 🔍 Use-Cases:
 *   - Recursion-heavy functions (Fibonacci, factorial, etc.)
 *   - API calls with same params
 *   - Repeated heavy computations
 *
 * 💡 Formula:
 *   memoizedFn(x) → returns cached result if x was already computed
 *
 * 👇 Example: Memoized Fibonacci vs Normal Fibonacci
 */

// ❌ Naive Recursive Fibonacci (very slow for n > 30)
function slowFibonacci(n) {
  if (n <= 1) return n;
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

// ✅ Memoized Fibonacci using closure
function memoizedFibonacci() {
  const cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n]; // 💾 Return cached value
    }

    if (n <= 1) {
      cache[n] = n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
    }

    return cache[n];
  };
}

const fastFib = memoizedFibonacci();

// ⏱ Speed Test
console.time("Slow Fib (35)");
console.log("slowFibonacci(35):", slowFibonacci(35)); // ~1s
console.timeEnd("Slow Fib (35)");

console.time("Memoized Fib (35)");
console.log("fastFib(35):", fastFib(35)); // ~0ms
console.timeEnd("Memoized Fib (35)");

/**
 * 🧠 Explanation:
 * - In the slow version, every call recomputes previous fib numbers recursively.
 * - In the memoized version, previously computed values are stored in a cache object (closure-based).
 *
 * 🔥 Benefits:
 * - Time complexity goes from O(2^n) → O(n)
 * - Extremely useful in Dynamic Programming
 *
 * ⚠️ Notes:
 * - Works best for pure functions (same input → same output)
 * - Can also be written generically for any function
 */

// ✅ BONUS: Generic memoize function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

// 🎯 Usage
const ad
