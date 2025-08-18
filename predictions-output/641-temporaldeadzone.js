// Question: What happens here?
console.log(a);
let a = 10;

// Answer: ReferenceError
// Explanation: Variables declared with let/const are hoisted but remain 
// in the "Temporal Dead Zone" until their declaration line is executed.