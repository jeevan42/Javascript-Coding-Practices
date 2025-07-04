// 🧠 Returning non-promise vs promise in `.then()`

Promise.resolve("A")
  .then(() => {
    return "B";
  })
  .then(console.log); // ✅ B