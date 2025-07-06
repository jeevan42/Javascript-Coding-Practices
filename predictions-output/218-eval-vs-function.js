// 🧠 `eval` runs in local scope; `Function` runs in global

let x = 10;
(function () {
  let x = 20;
  eval("console.log(x);");      // ✅ 20
  Function("console.log(x);")(); // ❌ ReferenceError
})();