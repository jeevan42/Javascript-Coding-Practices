// Concept: Remove Falsy Values
// Problem: Keep only truthy values in set.
// Solution:
function removeFalsy(set) {
  return new Set([...set].filter(Boolean));
}
console.log(removeFalsy(new Set([0,1,false,2,""]))); // Set {1,2}