/**
 * Concept: Recursion
 *
 * Definition:
 * A function that calls itself to solve smaller instances of the same problem.
 * Useful for problems like factorial, Fibonacci, tree traversal, etc.
 * 
 * Example:
 * Calculate factorial of a number using recursion.
 * 
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 */

function factorial(n) {
  if (n === 0) return 1;           // Base case
  return n * factorial(n - 1);     // Recursive call
}

console.log("Factorial of 5 is:", factorial(5)); // Output: 120
