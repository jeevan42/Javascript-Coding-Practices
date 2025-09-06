// Concept: Unique IDs
// Problem: Extract unique ids from objects array.
// Solution:
function uniqueIds(arr) {
  return new Set(arr.map(o=>o.id));
}
console.log(uniqueIds([{id:1},{id:2},{id:1}])); // Set {1,2}
