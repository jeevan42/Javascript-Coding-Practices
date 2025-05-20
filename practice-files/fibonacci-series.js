// -----------------------------------------------------
// 📘 Fibonacci Series - Definition, Explanation & Example
// -----------------------------------------------------

/*
Fibonacci is a sequence of numbers where each number 
is the sum of the previous two numbers.

Formula:
  F(0) = 0
  F(1) = 1
  F(n) = F(n-1) + F(n-2)

Example:
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Real-World Use:
  - Algorithms
  - Dynamic Programming
  - Data Structures
*/

// ------------------------------------------
// 🔁 Function to generate Fibonacci series
// ------------------------------------------

function generateFibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Example usage:
console.log("Fibonacci till 10 terms:", generateFibonacci(10));


// --------------------------------------------------
// 🧩 Problem: Check if a number is in Fibonacci series
// --------------------------------------------------

/*
Approach:
A number `num` is a Fibonacci number **if and only if**
either (5 * num^2 + 4) or (5 * num^2 - 4) is a perfect square.

This is a mathematical property.
*/

function isPerfectSquare(x) {
  let s = Math.floor(Math.sqrt(x));
  return s * s === x;
}

function isFibonacci(num) {
  let a = 5 * num * num + 4;
  let b = 5 * num * num - 4;
  return isPerfectSquare(a) || isPerfectSquare(b);
}

// Example usage:
console.log("Is 13 Fibonacci?", isFibonacci(13)); // true
console.log("Is 14 Fibonacci?", isFibonacci(14)); // false