// Union of Sets with Objects
// Problem: Union sets of objects by unique id.
// Solution:
function unionObjects(a, b, key) {
  const map = new Map();
  [...a, ...b].forEach(obj => map.set(obj[key], obj));
  return new Set(map.values());
}
const s1 = new Set([{id:1},{id:2}]);
const s2 = new Set([{id:2},{id:3}]);
console.log(unionObjects(s1, s2, "id"));
// Conclusion: Map helps deduplicate objects by key in union.
