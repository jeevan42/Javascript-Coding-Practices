// Intersection of Sets
// Problem: How to find common values between two Sets?
// Solution
const A = new Set([1, 2, 3]);
const B = new Set([2, 3, 4]);
const intersection = new Set([...A].filter(x => B.has(x)));
console.log(intersection); // Set {2, 3}
// Conclusion: Filter with has() achieves intersection.