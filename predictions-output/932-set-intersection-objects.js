// Intersection of Sets with Objects
// Problem: Find common objects by id.
// Solution:
function intersectionObjects(a, b, key) {
  const bKeys = new Set([...b].map(o => o[key]));
  return new Set([...a].filter(o => bKeys.has(o[key])));
}
const s1 = new Set([{id:1},{id:2}]);
const s2 = new Set([{id:2},{id:3}]);
console.log(intersectionObjects(s1, s2, "id"));
// Conclusion: Convert one set’s keys to Set for fast lookups.
