// Concept: Set Operations Library
// Problem: Provide common set utilities (union, intersection, difference).
// Solution:
const SetOps = {
  union: (a,b) => new Set([...a,...b]),
  intersection: (a,b) => new Set([...a].filter(x=>b.has(x))),
  difference: (a,b) => new Set([...a].filter(x=>!b.has(x)))
};

console.log(SetOps.union(new Set([1,2]), new Set([2,3]))); // Set {1,2,3}