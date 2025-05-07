// closure.js

/**
 * 🔒 What is a Closure?
 * 
 * A closure is a combination of a function and the lexical environment 
 * within which that function was declared. It allows a function to access 
 * variables from an enclosing scope, even after that outer function has finished executing.
 * 
 * ✅ In simple terms:
 * A closure gives you access to an outer function’s variables from an inner function,
 * even after the outer function has returned.
 */

// =========================
// Example 1: Basic Closure
// =========================
function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetJohn = greet("John");
greetJohn(); // Output: Hello, John!

// ===================================
// Example 2: Closure for State Memory
// ===================================
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // Output: 1
counter1(); // Output: 2

const counter2 = createCounter();
counter2(); // Output: 1 (separate closure, fresh count)

// ========================================
// Example 3: Private Variable Using Closure
// ========================================
function secretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    }
  };
}

const obj = secretHolder("myPassword");
console.log(obj.getSecret()); // Output: myPassword
obj.setSecret("newSecret123");
console.log(obj.getSecret()); // Output: newSecret123

// ======================================================
// Example 4: Closure Inside Loop (Common Interview Trap)
// ======================================================
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("Using var:", i); // Will print 3, 3, 3
  }, 1000);
}

// ✅ Corrected version using let (block scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("Using let:", i); // Will print 0, 1, 2
  }, 1000);
}

// ===================================================
// Example 5: Function Factory Using Closure (Currying)
// ===================================================
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20

// ========================
// Closure Summary:
// ========================
// - Allows data to persist between function calls.
// - Useful for function factories, private variables, currying.
// - Be careful with closures in loops using 'var'.
