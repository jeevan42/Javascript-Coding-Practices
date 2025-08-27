// forEach with Set
// Problem: How to apply a function on each Set value?
// Solution
const set3 = new Set([100, 200, 300]);
set3.forEach(value => console.log(value * 2));
// Conclusion: Set.forEach works like Array.forEach.