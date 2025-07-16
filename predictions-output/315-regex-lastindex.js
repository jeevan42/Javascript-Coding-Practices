// 🧠 RegExp with global flag retains lastIndex — reuse can break

const regex = /a/g;
console.log(regex.test("a")); // ✅ true
console.log(regex.test("a")); // ❌ false (starts from index 1 due to lastIndex)