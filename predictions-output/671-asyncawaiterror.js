// Q: What happens if you don't use try/catch in async/await?
async function risky() {
  throw new Error("Something went wrong!");
}

async function run() {
  try {
    await risky();
  } catch (e) {
    console.log("Caught:", e.message);
  }
}

run();

// Answer: Without try/catch, unhandled promise rejection occurs.
// Explanation: Async functions return promises, so errors must be caught with try/catch or .catch().