// Detect Duplicates with Set
// Problem: Check if array has duplicates.
// Solution:
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(hasDuplicates([1,2,3,3]));
// Conclusion: Compare set size with array length.
