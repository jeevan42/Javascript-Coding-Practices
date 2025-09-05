// Concept: Union Size
// Problem: Count total unique elements across sets.
// Solution:
function unionSize(a,b) {
  return new Set([...a,...b]).size;
}
console.log(unionSize(new Set([1,2]), new Set([2,3]))); // 3
