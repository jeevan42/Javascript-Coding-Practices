// 🧠 `async` functions always return a Promise

async function f() {
  return 42;
}

f().then(console.log); // ✅ 42