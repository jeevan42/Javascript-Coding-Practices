// 🧠 setTimeout in Loop Prediction

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}
// ❌ Output: var: 3, var: 3, var: 3
// 🧠 Explanation: 'var' is function-scoped. By the time setTimeout runs, the loop is done and i = 3.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 0);
}
// ✅ Output: let: 0, let: 1, let: 2
// 🧠 Explanation: 'let' is block-scoped. Each iteration captures its own value of `i` in a new scope.
