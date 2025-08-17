// Question: What will be output?
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("Oops"); })
  .catch(err => 2)
  .then(x => x + 1)
  .then(console.log);

// Answer: 3
// Explanation: The error is caught and replaced with 2. 
// Then +1 makes it 3, which is logged.