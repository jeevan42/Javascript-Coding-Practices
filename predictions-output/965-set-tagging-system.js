// Tagging System
// Problem: Prevent duplicate tags in articles.
// Solution:
const tags = new Set();
["js","web","js"].forEach(t => tags.add(t));
console.log([...tags]);
// Conclusion: Tags stay unique with Set.