// 🧠 async functions always return Promise

async function test() {
  return 5;
}

test().then(console.log); // ✅ 5

// 🧠 Even though it returns a value, it's wrapped in a Promise