// Use Case: Removing duplicates
// Problem: How to remove duplicates from an array?
// Solution
const numbersArr = [1, 1, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(numbersArr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]
// Conclusion: Set is a clean way to remove duplicates.