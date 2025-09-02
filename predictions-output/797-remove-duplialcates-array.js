// Concept: Remove Duplicates using Set
// Problem: Remove duplicates from an array efficiently.
// Solution:
const numbers = [1,2,2,3,4,4,5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1,2,3,4,5]