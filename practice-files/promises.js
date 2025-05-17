/**
 * promises.js
 * 
 * JavaScript Promises explained with different types and examples
 * 
 * A Promise represents an asynchronous operation that may complete in the future.
 * It can be in one of these states:
 * - Pending: initial state, neither fulfilled nor rejected
 * - Fulfilled: operation completed successfully
 * - Rejected: operation failed
 * 
 * Promises allow chaining with `.then()`, `.catch()`, and `.finally()`.
 */

// Basic Promise example
const basicPromise = () => {
  return new Promise((resolve, reject) => {
    const success = true; // change to false to test rejection
    setTimeout(() => {
      if (success) {
        resolve("✅ Promise resolved successfully");
      } else {
        reject("❌ Promise rejected with error");
      }
    }, 1000);
  });
};

basicPromise()
  .then(result => console.log(result))  // ✅ Promise resolved successfully
  .catch(error => console.error(error))
  .finally(() => console.log("Promise settled"));

// -------------------------

// Promise.all - waits for all promises to resolve or any to reject
const promiseAllExample = () => {
  const p1 = Promise.resolve(3);
  const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
  const p3 = 42; // non-promise value treated as resolved

  Promise.all([p1, p2, p3])
    .then(values => console.log("Promise.all results:", values))
    .catch(error => console.error("Promise.all error:", error));
};

promiseAllExample(); // Logs: Promise.all results: [3, "foo", 42]

// -------------------------

// Promise.race - resolves/rejects as soon as one promise settles
const promiseRaceExample = () => {
  const p1 = new Promise((resolve) => setTimeout(resolve, 500, "fast"));
  const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "slow"));

  Promise.race([p1, p2])
    .then(value => console.log("Promise.race winner:", value))
    .catch(error => console.error(error));
};

promiseRaceExample(); // Logs: Promise.race winner: fast

// -------------------------

// Promise chaining example
const promiseChaining = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve(2), 500);
  })
  .then(result => {
    console.log("Step 1:", result);
    return result * 3;
  })
  .then(result => {
    console.log("Step 2:", result);
    return result + 4;
  })
  .then(result => {
    console.log("Step 3:", result);
  });
};

promiseChaining();

// -------------------------

// Promise.reject example
const promiseRejectExample = () => {
  Promise.reject("❌ Explicit rejection")
    .catch(error => console.error("Caught error:", error));
};

promiseRejectExample();

