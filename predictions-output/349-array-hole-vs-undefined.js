const arr = [undefined, , undefined];
console.log(arr.map((v, i) => i in arr)); // [true, false, true]
