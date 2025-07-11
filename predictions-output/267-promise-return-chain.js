// 🧠 Return a value to pass down the chain

Promise.resolve(2)
  .then(res => res * 2)
  .then(console.log); // ✅ 4