// 🧠 Using labels with break

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j > 3) break outer;
    console.log(i, j);
  }
}

// 🧠 `break label` jumps out of labeled loop block

// 🧠 What’s Happening?
// outer: is a label assigned to the outer for loop.
// Inside the inner loop, when i + j > 3, it executes break outer.
// This breaks out of the entire outer loop, not just the inner one.

// 🧪 Example Execution
// Let’s step through:
// | `i` | `j` | `i + j` | Condition `i + j > 3` | Action         |
// | --- | --- | ------- | --------------------- | -------------- |
// | 0   | 0   | 0       | ❌                     | Print (0, 0)   |
// | 0   | 1   | 1       | ❌                     | Print (0, 1)   |
// | 0   | 2   | 2       | ❌                     | Print (0, 2)   |
// | 1   | 0   | 1       | ❌                     | Print (1, 0)   |
// | 1   | 1   | 2       | ❌                     | Print (1, 1)   |
// | 1   | 2   | 3       | ❌                     | Print (1, 2)   |
// | 2   | 0   | 2       | ❌                     | Print (2, 0)   |
// | 2   | 1   | 3       | ❌                     | Print (2, 1)   |
// | 2   | 2   | 4       | ✅                     | 🔥 Break outer |

// So, at i=2, j=2, the sum exceeds 3 and break outer terminates both loops immediately.

// ✅ Output:
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1

// 📌 Why use this?
// To break out of multiple nested loops cleanly, instead of setting flags or nesting more logic.


