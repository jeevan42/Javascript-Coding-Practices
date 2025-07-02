// 🧠 arguments.callee is deprecated in strict mode

(function recursive(n) {
  if (n === 0) return;
  console.log(n);
  arguments.callee(n - 1); // ❌ Not allowed in strict mode
})(3);