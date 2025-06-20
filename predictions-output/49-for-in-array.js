// 🧠 Using for...in on arrays

const arr = [10, 20, 30];
arr.test = "extra";

for (let key in arr) {
  console.log(key); 
}
// ✅ Logs: 0, 1, 2, test
// 🧠 `for...in` iterates over all enumerable properties (not ideal for arrays)
