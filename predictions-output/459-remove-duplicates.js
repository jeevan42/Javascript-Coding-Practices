// Remove duplicates using Set
const nums = [1, 2, 2, 3, 1];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]