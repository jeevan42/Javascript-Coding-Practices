// 🧠 Equality Operators

console.log(0 == '');    
// ✅ true
// 🧠 '' is coerced to 0 → 0 == 0 → true

console.log(0 === '');   
// ❌ false
// 🧠 Strict equality doesn't allow type coercion

console.log(false == '0');  
// ✅ true
// 🧠 '0' is coerced to 0 → false == 0 → true

console.log(false === '0');  
// ❌ false
// 🧠 No coercion → false is boolean, '0' is string
