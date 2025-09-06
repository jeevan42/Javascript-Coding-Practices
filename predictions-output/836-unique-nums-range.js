// Concept: Unique Numbers in Range
// Problem: Count unique nums in given range.
// Solution:
function uniqueInRange(nums, start, end) {
  return new Set(nums.filter(n=>n>=start && n<=end)).size;
}
console.log(uniqueInRange([1,2,2,3,4,5],2,4)); // 3
