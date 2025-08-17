// Question: What will be logged?
async function test() {
  return "Hello";
}
console.log(test());

// Answer: Promise { 'Hello' }
// Explanation: An async function always returns a Promise. 
// Even if you return a string, it's wrapped inside a resolved Promise.