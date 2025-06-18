/**
 * 🔒 JavaScript Strict Mode
 *
 * 'use strict' is a directive that enables strict mode in JavaScript.
 * It helps catch common bugs and prevents unsafe actions.
 */

// ==============================
// 1. Enabling Strict Mode
// ==============================

"use strict"; // applies to the whole script

// ✅ Must be at the top of the file or function scope

function demo() {
  "use strict"; // can be used in function scope too
  // code here is in strict mode
}

// ==============================
// 2. Common Behaviors in Strict Mode
// ==============================

// ❌ Using undeclared variables
try {
  x = 10; // ReferenceError
} catch (e) {
  console.log("Undeclared variable error:", e.message);
}

// ❌ Assignment to read-only/global properties
try {
  NaN = 100; // TypeError
} catch (e) {
  console.log("Cannot assign to NaN:", e.message);
}

// ❌ Duplicate parameter names in functions
try {
  eval("function test(a, a) { return a + a; }"); // SyntaxError
} catch (e) {
  console.log("Duplicate param:", e.message);
}

// ✅ Secures 'this' in functions
function showThis() {
  "use strict";
  console.log(this); // undefined instead of global object
}
showThis();

// ==============================
// 3. Summary:
// ==============================
// - Prevents undeclared variables
// - Secures 'this' in functions
// - Throws more exceptions (e.g. duplicate params)
// - Helps write cleaner, more secure JavaScript
