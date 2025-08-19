// Question: What does this return?
const nums = [1, 2, 3, 4];
const result = nums.reduce((acc, n) => acc + n, 0);
console.log(result);

// Answer: 10
// Explanation: reduce accumulates values (1+2+3+4 = 10).