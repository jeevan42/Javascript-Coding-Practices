// Concept: Compare Set vs Array memory
// Problem: Which structure is heavier?
// Solution:
const bigArr=[...Array(1e5).keys()];
const bigSet2=new Set(bigArr);
console.log(bigArr.length,bigSet2.size);
// Conclusion: Memory differs, Array may be lighter but slower in lookup.
