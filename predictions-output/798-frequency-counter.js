// Concept: Frequency Counter with Set + Map
// Problem: Count unique word frequencies in a sentence.
// Solution:
function wordFrequency(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const map = new Map();
  words.forEach(w => map.set(w, (map.get(w) || 0) + 1));
  return map;
}
console.log(wordFrequency("apple banana apple orange banana apple"));
// Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }