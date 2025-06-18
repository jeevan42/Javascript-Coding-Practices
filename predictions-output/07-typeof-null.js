// 🧠 typeof null

console.log(typeof null); 
// ❌ Output: "object"
// 🧠 Explanation:
// This is a well-known bug in JavaScript due to legacy reasons.
// Even though `null` represents "nothing", typeof null returns "object".
