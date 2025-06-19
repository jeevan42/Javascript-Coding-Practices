// 🧠 String and Number Coercion

console.log("5" + 2); 
// ✅ "52" (string concatenation)

console.log("5" - 2); 
// ✅ 3 (number coercion)

console.log("5" * "2"); 
// ✅ 10 (both coerced to numbers)

console.log("5" + true); 
// ✅ "5true" (boolean → string)
