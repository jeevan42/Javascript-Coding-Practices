const arr = [1, 2, 3];
delete arr[1];
console.log(arr);     // [1, empty, 3]
console.log(arr[1]);  // undefined
console.log(arr.length); // 3
