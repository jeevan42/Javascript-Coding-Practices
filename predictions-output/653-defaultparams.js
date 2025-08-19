// Question: What is the output?
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("JS"));

// Answer:
// Hello, Guest
// Hello, JS
// Explanation: Default parameters are used when argument is missing/undefined.