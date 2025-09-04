// Concept: Union of Strings
// Problem: Merge sets of characters.
// Solution:
function unionStrings(a,b) {
  return new Set([...a,...b]);
}
console.log(unionStrings(new Set("ab"), new Set("bc"))); // Set {'a','b','c'}