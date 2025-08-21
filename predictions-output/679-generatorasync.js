// Q: What is an async generator?
async function* numbers() {
  yield 1;
  yield 2;
}

(async () => {
  for await (let num of numbers()) {
    console.log(num);
  }
})();

// Answer: Async generators yield promises.
// Explanation: Combines generators with async for async iteration.