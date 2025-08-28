// Symmetric Difference
// Problem: How to find values present in A or B but not both?
// Solution
const A2 = new Set([1, 2, 3]);
const B2 = new Set([3, 4, 5]);
const symDiff = new Set([...A2].filter(x => !B2.has(x)).concat([...B2].filter(x => !A2.has(x))));
console.log(symDiff); // Set {1, 2, 4, 5}
// Conclusion: Combine differences to get symmetric difference.