// Difference of Sets with Objects
// Problem: Get objects in one set not in another by key.
// Solution:
function differenceObjects(a, b, key) {
  const bKeys = new Set([...b].map(o => o[key]));
  return new Set([...a].filter(o => !bKeys.has(o[key])));
}
const s1 = new Set([{id:1},{id:2}]);
const s2 = new Set([{id:2},{id:3}]);
console.log(differenceObjects(s1, s2, "id"));
// Conclusion: Filter by absence in second set’s keys.
