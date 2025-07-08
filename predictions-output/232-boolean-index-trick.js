// 🧠 `true` coerces to 1, `false` to 0

const arr = ["zero", "one"];
console.log(arr[true]);  // ✅ 'one'
console.log(arr[false]); // ✅ 'zero'