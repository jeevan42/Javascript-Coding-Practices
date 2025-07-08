// 🧠 Errors thrown in async functions are wrapped in Promises

async function fail() {
  throw new Error("Oops");
}

fail()
  .catch(err => console.log("Caught:", err.message)); // ✅ Caught: Oops