// Deleting values from Set
// Problem: How to remove a specific value from a Set?
// Solution
const cities = new Set(["Delhi", "Paris", "London"]);
cities.delete("Paris");
console.log(cities); // Set {"Delhi", "London"}
// Conclusion: Use .delete() to remove specific elements.