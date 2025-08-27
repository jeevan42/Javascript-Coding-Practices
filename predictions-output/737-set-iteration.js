// Iterating over Set
// Problem: How to loop through values in a Set?
// Solution
const set2 = new Set(["x", "y", "z"]);
for (let item of set2) console.log(item);
// Conclusion: Set is iterable; you can use for...of, forEach, or spread operator.