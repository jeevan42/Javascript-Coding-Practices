// Question: What happens here?
const [a, , b] = [10, 20, 30];
console.log(a, b);

// Answer: 10 30
// Explanation: Skipping the second element using a comma. 
// So a=10, b=30.