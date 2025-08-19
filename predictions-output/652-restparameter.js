// Question: What is logged?
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// Answer: 10
// Explanation: Rest parameter `...nums` collects all arguments into an array.