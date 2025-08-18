// Question: What will this log?
const nums = [1, 2, 3];
const result = nums.map((n, i) => n * i);
console.log(result);

// Answer: [0, 2, 6]
// Explanation: map applies function to each element. 
// Multiplying element by its index → [1*0, 2*1, 3*2].