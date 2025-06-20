// 🧠 parseInt and map trap

const arr = ["10", "10", "10"];
const parsed = arr.map(parseInt);

console.log(parsed); 
// ❌ [10, NaN, 2]
// 🧠 parseInt(value, index) — 2nd arg is radix!
// Use `.map(x => parseInt(x))` to avoid
