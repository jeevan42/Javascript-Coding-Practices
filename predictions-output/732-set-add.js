// Adding values to a Set
// Problem: How to insert values into a Set?
// Solution
const set1 = new Set();
set1.add(10);
set1.add(20).add(30); // chaining
console.log(set1); // Set {10, 20, 30}
// Conclusion: Use .add() method, it ignores duplicates and supports chaining.