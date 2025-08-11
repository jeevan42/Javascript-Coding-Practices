const nums = [1, 2, 3];

console.log(nums.flatMap(n => [n, n * 2])); // [1, 2, 2, 4, 3, 6]