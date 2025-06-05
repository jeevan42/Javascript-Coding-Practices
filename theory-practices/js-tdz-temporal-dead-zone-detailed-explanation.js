// js-tdz-temporal-dead-zone-detailed-explanation.js

/*
📘 Temporal Dead Zone (TDZ) - Deep Explanation

🧠 What is TDZ?
TDZ (Temporal Dead Zone) refers to the period between:
- When a block is entered, and
- When a `let` or `const` variable is declared.

During this time:
✅ The variable is **hoisted** (i.e. the engine knows it exists),
❌ But it is **not initialized** yet, and
🚫 Any attempt to access it throws a `ReferenceError`.

🔍 Why does TDZ exist?
TDZ enforces a stricter and safer way of working with variables.

Unlike `var` (which is hoisted and initialized with `undefined`), `let` and `const` are hoisted **without an initial value**.

This prevents bugs like:

    if (!foo) {
      let foo = 10; // ❌ ReferenceError — foo is in TDZ
    }

With `var`, this would silently pass and do unintended behavior.

---

🔬 What does the JS engine do?

During the creation phase (before any code runs):
- JavaScript scans the block and hoists all `let` and `const` declarations.
- But instead of setting them to `undefined` like `var`, they are marked as **"uninitialized"**.
- This creates the TDZ.

Only after the line `let foo = 10;` is evaluated, the engine initializes `foo`, and it becomes safe to access.

---

📌 Example: TDZ in Action

{
  // Start of block — TDZ for 'x' begins
  console.log(x); // ❌ ReferenceError
  let x = 5;      // TDZ ends here — 'x' is initialized
  console.log(x); // ✅ Logs: 5
}

---

⚠️ Common Gotcha: Function Parameters + TDZ

function demo(flag) {
  if (flag) {
    console.log(value); // ❌ ReferenceError
    let value = 42;
  }
}

- Even though `value` is declared later, the TDZ is active from the start of the `if` block.

---

🧪 Summary: Why TDZ is Good

✅ Catches subtle bugs early.
✅ Encourages cleaner and more predictable code.
✅ Prevents use of variables before intentional initialization.

So remember:
🚫 Don't access `let` or `const` before their declaration — that’s the TDZ trap!
*/

