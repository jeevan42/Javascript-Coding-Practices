// Question: What will this log?
const arr = [1, 2, 3];
const copy = [...arr, 4];
console.log(copy);

// Answer: [1, 2, 3, 4]
// Explanation: Spread `...` expands elements of the array. 
// It creates a shallow copy and adds `4`.