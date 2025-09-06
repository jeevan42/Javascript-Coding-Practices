// Concept: First Duplicate
// Problem: Find first duplicate element in array.
// Solution:
function firstDuplicate(arr) {
  const seen = new Set();
  for (let x of arr) {
    if (seen.has(x)) return x;
    seen.add(x);
  }
  return null;
}
console.log(firstDuplicate([2,1,3,5,3,2])); // 3
