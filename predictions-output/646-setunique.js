// Question: What will be the result?
const nums = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(nums)];
console.log(unique);

// Answer: [1, 2, 3, 4]
// Explanation: Set stores unique values only. 
// Spread (...) converts it back to array.