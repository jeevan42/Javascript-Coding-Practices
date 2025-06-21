// 🧠 Numeric keys in objects are sorted

const obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(obj)); 
// ✅ ["2", "7", "100"]

// 🧠 Numeric keys get sorted in ascending order automatically
