// 🧠 parseInt and map trap — classic JS interview gotcha

const arr = ["10", "10", "10"];

const parsed = arr.map(parseInt);

console.log(parsed); 
// ❌ Output: [10, NaN, 2]

// 🧠 WHY?
// map passes 3 args: value, index, array
// parseInt expects 2 args: string, radix
// So it becomes:
console.log(parseInt("10", 0)); // ✅ 10 (radix auto-detected)
console.log(parseInt("10", 1)); // ❌ NaN (invalid radix)
console.log(parseInt("10", 2)); // ✅ 2 ("10" in binary = 2)

// ✅ FIX: Use a clean arrow function that passes only the string
const fixed = arr.map(x => parseInt(x));
console.log(fixed); 
// ✅ Output: [10, 10, 10]
