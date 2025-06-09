/**
 * 🧠 Problem: Implement Array.prototype.map Polyfill
 *
 * 📘 Goal:
 *   Re-create the functionality of JavaScript's built-in `Array.prototype.map` method.
 * 
 * 🧪 Native Usage:
 *   [1, 2, 3].map((num) => num * 2) ➞ [2, 4, 6]
 * 
 * ✅ Your custom method should:
 *   - Return a new array
 *   - Not mutate the original array
 *   - Call the callback function with 3 args: (currentValue, index, originalArray)
 */

// ✅ Polyfill Implementation
Array.prototype.myMap = function (callback, thisArg) {
  // Check: Is the context an actual array?
  if (!Array.isArray(this)) {
    throw new TypeError('myMap can only be called on arrays');
  }

  // Check: Is callback a function?
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const result = [];

  // Loop through the array and apply the callback
  for (let i = 0; i < this.length; i++) {
    // Only process valid indices (skip holes in sparse arrays)
    if (i in this) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
  }

  return result;
};

// 🧪 Test Case 1
const nums = [1, 2, 3];
const doubled = nums.myMap((n) => n * 2);
console.log(doubled); // [2, 4, 6]

// 🧪 Test Case 2 - with index
const withIndex = nums.myMap((n, i) => n + i);
console.log(withIndex); // [1, 3, 5]

// 🧪 Test Case 3 - using `thisArg`
const multiplier = {
  factor: 10,
};
const resultWithThisArg = nums.myMap(function (n) {
  return n * this.factor;
}, multiplier);
console.log(resultWithThisArg); // [10, 20, 30]

/**
 * ⚠️ Edge Cases:
 * - Sparse arrays (like `[1, , 3]`) — map skips empty slots by design
 * - Must return a new array
 * - Must not modify original
 * - `thisArg` must be respected
 *
 * 🧠 Interview Tip:
 * - Understanding `map` internally helps in understanding other methods like `filter`, `reduce`, etc.
 * - Use `callback.call(thisArg, ...)` for better compatibility.
 *
 * 🧪 Compare with Native:
 *   [1,2,3].map(...) vs [1,2,3].myMap(...)
 */
