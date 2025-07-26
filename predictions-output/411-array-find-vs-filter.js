const arr = [1, 2, 3, 4];

console.log(arr.find(x => x > 2));   // 3 (first match)
console.log(arr.filter(x => x > 2)); // [3, 4] (all matches)
