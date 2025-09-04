// Concept: Remove Words Using Set
// Problem: Remove banned words from text.
// Solution:
function filterWords(text, banned) {
  return text.split(" ").filter(w => !banned.has(w)).join(" ");
}
console.log(filterWords("this is bad example", new Set(["bad"]))); // "this is example"