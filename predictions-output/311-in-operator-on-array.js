// 🧠 Using `in` on arrays checks for index presence, not value

const arr = ["a", "b", "c"];
console.log(1 in arr);  // ✅ true (index 1 exists)
console.log("b" in arr); // ❌ false (value, not index)