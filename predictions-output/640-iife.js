// Question: What will be the output?
(function() {
  var a = 10;
  console.log(a);
})();
console.log(typeof a);

// Answer:
// 10
// undefined
// Explanation: IIFE creates its own scope. 'a' is not accessible outside.