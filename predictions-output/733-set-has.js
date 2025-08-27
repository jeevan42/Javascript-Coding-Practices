// Checking presence in Set
// Problem: How to check if a value exists in a Set?
// Solution
const fruits = new Set(["apple", "banana", "mango"]);
console.log(fruits.has("banana")); // true
console.log(fruits.has("grapes")); // false
// Conclusion: Use .has() to check for existence, similar to includes() in arrays.