// 🧠 delete creates holes in arrays

const arr = [1, 2, 3];
delete arr[1];
console.log(arr);          // ✅ [1, <1 empty item>, 3]
console.log(arr.length);   // ✅ 3

// 🧠 Use splice() to remove and shift