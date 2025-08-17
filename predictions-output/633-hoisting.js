// Question: What happens here?
console.log(a);
var a = 5;

// Answer: undefined
// Explanation: Variable declarations with var are hoisted to the top 
// but initialized with undefined until the assignment line.