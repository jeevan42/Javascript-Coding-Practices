// 🧠 `var` in loops causes closure issue in `setTimeout`

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // ❌ prints 3, 3, 3
}