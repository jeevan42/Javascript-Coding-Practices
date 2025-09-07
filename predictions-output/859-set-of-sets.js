// Concept: Nested Sets
// Problem: Can we store Sets inside Sets?
// Solution:
const s1=new Set([1]);
const s2=new Set([2]);
const setOfSets=new Set([s1,s2]);
console.log(setOfSets); // Set {Set(1),Set(1)}
// Conclusion: Sets can contain other Sets but identity matters.
