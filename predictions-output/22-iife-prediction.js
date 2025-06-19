// 🧠 IIFE (Immediately Invoked Function Expression)

(function () {
  var a = 10;
  console.log(a); // ✅ 10
})();

console.log(typeof a); 
// ❌ ReferenceError or undefined (in strict)
// 🧠 'a' is not accessible outside the IIFE scope
