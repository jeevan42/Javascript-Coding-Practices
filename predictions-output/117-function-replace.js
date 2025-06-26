// 🧠 Reassigning function reference

function foo() {
  return "first";
}
foo = function () {
  return "second";
};

console.log(foo()); // ✅ "second"

// 🧠 Function name is not protected unless declared with `const`