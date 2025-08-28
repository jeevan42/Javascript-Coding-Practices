// Set Performance
// Problem: How does Set compare to Array in performance?
// Solution
const arrCheck = [1, 2, 3, 4, 5];
console.log(arrCheck.includes(5)); // O(n)
const setCheck = new Set(arrCheck);
console.log(setCheck.has(5)); // O(1)
// Conclusion: Set has faster lookups (O(1)) compared to arrays.