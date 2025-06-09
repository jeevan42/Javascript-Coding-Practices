/**
 * ⏳ Problem: setTimeout + Closure + Loop (Interview Favorite)
 *
 * 📘 Question:
 *   What will the following code output and how do you fix it?
 *
 *     for (var i = 1; i <= 5; i++) {
 *       setTimeout(() => console.log(i), i * 1000);
 *     }
 *
 * ❓ Expected: 1 2 3 4 5 (one per second)
 * ❗ Actual:   6 6 6 6 6
 *
 * 🔍 Why? Because of closure + var
 * - `var` is function-scoped, not block-scoped.
 * - The loop finishes before any timeout executes.
 * - All timeout callbacks share the same `i`, which becomes 6 after the loop ends.
 */

// ❌ Problematic Version
console.log("❌ Problematic Version (using var)");
for (var i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

// ✅ Solution 1: Use `let` (block scoped)
console.log("\n✅ Solution 1: Using let");
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

// ✅ Solution 2: IIFE (Immediately Invoked Function Expression)
console.log("\n✅ Solution 2: Using IIFE");
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(() => console.log(j), j * 1000);
  })(i);
}

// ✅ Solution 3: Passing i as argument to setTimeout (non-standard but works in browsers)
console.log("\n✅ Solution 3: Using setTimeout argument");
for (var i = 1; i <= 5; i++) {
  setTimeout(function (j) {
    return () => console.log(j);
  }(i), i * 1000);
}

/**
 * 🧠 Explanation:
 * - setTimeout is asynchronous; it schedules callbacks to run *after* the loop ends.
 * - `var` is not block-scoped, so all callbacks reference the same variable.
 * - Solutions:
 *   ✅ Use `let` to get new `i` per loop (most elegant)
 *   ✅ Use an IIFE to capture current value of `i`
 *   ✅ Pass `i` directly inside setTimeout (not Node-safe)
 *
 * 📌 Takeaway:
 *  > Always be aware of how scoping and closures interact with async behavior in JS!
 */
