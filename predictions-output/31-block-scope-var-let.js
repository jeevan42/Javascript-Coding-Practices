// 🧠 var vs let block scope

{
  var a = 10;
  let b = 20;
}

console.log(a); // ✅ 10
console.log(b); // ❌ ReferenceError
// 🧠 var is function-scoped, let is block-scoped
