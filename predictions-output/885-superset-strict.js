// Strict Superset
// Problem: Check if one set is a proper superset of another.
// Solution:
function isStrictSuperset(a, b) {
  return a.size > b.size && [...b].every(x => a.has(x));
}
console.log(isStrictSuperset(new Set([1,2,3]), new Set([1,2])));
// Conclusion: Superset check with size comparison.
