// js-tdz-temporal-dead-zone.js

/*
📘 Temporal Dead Zone (TDZ) - Definition:
The TDZ is the time between the **entering of a block** and the point where a `let` or `const` variable is **declared** and **initialized**.

During this phase, the variable **exists** but is **inaccessible**, and accessing it will throw a **ReferenceError**.

✅ Only `let` and `const` are affected by TDZ — NOT `var`.

🔍 Example 1:

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;

Explanation:
- The `a` variable is hoisted but uninitialized during TDZ.
- Accessing it before the `let a = 10` line causes a ReferenceError.

🔍 Example 2:

{
  console.log(x); // ❌ ReferenceError
  let x = 5;
}

🧠 Behind the scenes:
- JS knows `x` will be declared (due to hoisting).
- But until the line `let x = 5` executes, `x` is in the TDZ.
- Once initialized, it's safe to use.

📌 `var` does NOT have TDZ:

console.log(b); // ✅ undefined
var b = 20;

⚠️ Tip:
Avoid accessing variables before their `let`/`const` declaration to stay safe from TDZ issues.

✅ Best Practice:
Always declare variables at the top of their block scope to avoid TDZ bugs and confusion.
*/

