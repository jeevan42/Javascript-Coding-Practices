// 🧠 Comparing Date objects

const d1 = new Date("2023-01-01");
const d2 = new Date("2023-01-01");

console.log(d1 === d2); 
// ❌ false (different references)

console.log(d1.getTime() === d2.getTime()); 
// ✅ true (same timestamp)
