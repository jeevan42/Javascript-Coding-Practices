// Concept: Remove Characters
// Problem: Remove unwanted chars from string.
// Solution:
function removeChars(str, chars) {
  const set = new Set(chars);
  return [...str].filter(c=>!set.has(c)).join("");
}
console.log(removeChars("hello world","lo")); // "he wrd"
