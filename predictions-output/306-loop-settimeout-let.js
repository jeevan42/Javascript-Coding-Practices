// 🧠 `let` solves closure issue in `setTimeout`

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // ✅ prints 0, 1, 2
}