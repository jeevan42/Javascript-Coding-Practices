// 🧠 Errors in async functions become rejected Promises

async function test() {
  throw "Boom";
}

test().catch(err => console.log("Caught", err)); // ✅ Caught Boom