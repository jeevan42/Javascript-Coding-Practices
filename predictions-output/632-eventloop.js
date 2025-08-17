// Question: What is the output?
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// Answer:
// Start
// End
// Timeout
// Explanation: setTimeout callback is pushed to the event queue, so 
// synchronous code executes first, then the async callback.