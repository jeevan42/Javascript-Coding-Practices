// 🧠 Assigning undeclared var leaks to global (non-strict)

function test() {
  leaked = "oops";
}
test();
console.log(leaked); // ✅ "oops"

// 🧠 Avoid this by always using `let`, `const`, or 'use strict'