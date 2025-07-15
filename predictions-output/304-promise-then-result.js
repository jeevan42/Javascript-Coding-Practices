// 🧠 `then()` returns a new Promise

Promise.resolve(5)
  .then(val => val * 2)
  .then(console.log); // ✅ 10