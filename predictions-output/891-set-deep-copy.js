// Deep Copy of Set
// Problem: Copy a set with nested objects.
// Solution:
function deepCopySet(s) {
  return new Set([...s].map(v => (typeof v === 'object' ? structuredClone(v) : v)));
}
const s1 = new Set([{a:1}, {b:2}]);
const s2 = deepCopySet(s1);
console.log(s2);
// Conclusion: structuredClone or JSON trick for deep copy.
