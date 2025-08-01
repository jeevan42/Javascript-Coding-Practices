const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);   // returns new array
nums.forEach(n => console.log(n * 2));  // just logs
console.log(doubled); // [2, 4, 6]