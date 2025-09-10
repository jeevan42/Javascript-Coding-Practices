// Shallow Copy of Set
// Problem: Clone a set.
// Solution:
const s1 = new Set([1,2,3]);
const s2 = new Set(s1);
console.log(s2);
// Conclusion: Constructor with set makes shallow copy.
