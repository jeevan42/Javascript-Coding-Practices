// 🧠 Set vs Array Uniqueness

const arr = [1, 2, 2, 3];
const set = new Set(arr);

console.log(set); 
// ✅ Set { 1, 2, 3 }

console.log([...set]); 
// ✅ [1, 2, 3]
// 🧠 Set removes duplicates automatically
