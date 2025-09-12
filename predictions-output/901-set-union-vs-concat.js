// Union vs Concat
// Problem: Difference between using Set union and array concat.
// Solution:
const arr1 = [1,2,3];
const arr2 = [3,4,5];
const union = new Set([...arr1, ...arr2]);
const concat = arr1.concat(arr2);
console.log(union);  // {1,2,3,4,5}
console.log(concat); // [1,2,3,3,4,5]
// Conclusion: Union removes duplicates, concat does not.