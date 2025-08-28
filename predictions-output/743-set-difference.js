// Difference of Sets
// Problem: How to find values present in one Set but not another?
// Solution
const A1 = new Set([1, 2, 3, 4]);
const B1 = new Set([3, 4, 5]);
const difference = new Set([...A1].filter(x => !B1.has(x)));
console.log(difference); // Set {1, 2}
// Conclusion: Difference can be calculated using filter and has().