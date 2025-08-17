// Question: What is logged?
console.log(null == undefined);
console.log(null === undefined);

// Answer:
// true
// false
// Explanation: == allows type coercion (they are loosely equal), 
// === checks strict equality (different types).