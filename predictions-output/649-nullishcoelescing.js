// Question: What will this output?
const val = 0 ?? 42;
console.log(val);

// Answer: 0
// Explanation: ?? only uses the right-hand side if the left-hand side 
// is null or undefined. 0 is valid, so result is 0.