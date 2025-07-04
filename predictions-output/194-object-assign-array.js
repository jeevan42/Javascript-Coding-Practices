// 🧠 Object.assign can copy array indices too

const arr = [1, 2];
const obj = Object.assign({}, arr);

console.log(obj); // ✅ {0: 1, 1: 2}