// 🧠 NaN Behavior

console.log(NaN === NaN); 
// ❌ Output: false
// 🧠 Explanation: NaN is **not equal to anything**, even itself. Use Number.isNaN() to check.

console.log(typeof NaN);  
// ✅ Output: "number"
// 🧠 Explanation: Despite the name (Not-a-Number), typeof NaN is still "number" in JavaScript.
