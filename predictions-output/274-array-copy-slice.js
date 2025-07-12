// 🧠 Use `.slice()` to create a shallow copy

const arr = [1, 2, 3];
const copy = arr.slice();
console.log(copy === arr); // ❌ false