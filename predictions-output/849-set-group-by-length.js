// Concept: Group strings by length using Set
// Problem: Classify unique strings into groups.
// Solution:
const strings = ["cat","dog","bird"];
const groups = new Map();
new Set(strings).forEach(s => {
  const len = s.length;
  if (!groups.has(len)) groups.set(len, []);
  groups.get(len).push(s);
});
console.log(groups); // Map {3:['cat','dog'],4:['bird']}
// Conclusion: Combine Set and Map for grouping.
