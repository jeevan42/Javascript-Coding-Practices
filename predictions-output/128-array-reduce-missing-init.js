// 🧠 .reduce() without initial value

const nums = [1, 2, 3];
const sum = nums.reduce((acc, cur) => acc + cur);
console.log(sum); // ✅ 6

// 🧠 Without init, first item becomes accumulator