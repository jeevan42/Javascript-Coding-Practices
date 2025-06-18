// 🧠 Object Key Coercion

const obj = {};
const a = { key: "a" };
const b = { key: "b" };

obj[a] = 123;
obj[b] = 456;

console.log(obj); 
// ✅ Output: { '[object Object]': 456 }
// 🧠 Explanation:
// - When objects are used as keys, they are coerced to strings.
// - Both a and b become '[object Object]'.
// - So the second assignment (`obj[b] = 456`) overrides the first.
