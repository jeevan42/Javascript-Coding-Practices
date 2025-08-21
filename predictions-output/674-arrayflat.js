// Q: What does .flat() do?
const arr = [1, [2, [3, 4]]];

console.log(arr.flat());      // [1, 2, [3, 4]]
console.log(arr.flat(2));     // [1, 2, 3, 4]

// Answer: Flattens nested arrays.
// Explanation: Depth parameter controls how deep it flattens.