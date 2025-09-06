// Concept: Track Visits
// Problem: Track visited pages using Set.
// Solution:
const visited = new Set();
visited.add("/home");
visited.add("/about");
console.log(visited.has("/about")); // true
