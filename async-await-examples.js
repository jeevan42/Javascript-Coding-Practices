/**
 * async-await-examples.js
 * 
 * Demonstrates async/await behavior in JavaScript:
 * 1. Sequential awaits: waits for each promise one after another
 * 2. Parallel awaits: run promises simultaneously with Promise.all
 */

const fetchData = (msg, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ ${msg} after ${delay / 1000} sec`);
    }, delay);
  });
};

// Sequential awaits example
const handleFetchSequential = async () => {
  console.log("⏳ Starting 3 async operations sequentially...");

  const data1 = await fetchData("First fetch", 2000);
  console.log(data1);

  const data2 = await fetchData("Second fetch", 2000);
  console.log(data2);

  const data3 = await fetchData("Third fetch", 2000);
  console.log(data3);
};

// Parallel awaits example using Promise.all
const handleFetchParallel = async () => {
  console.log("⏳ Starting 3 async operations in parallel...");

  const promise1 = fetchData("First fetch", 2000);
  const promise2 = fetchData("Second fetch", 2000);
  const promise3 = fetchData("Third fetch", 2000);

  const results = await Promise.all([promise1, promise2, promise3]);
  results.forEach(res => console.log(res));
};

// Run examples one after another with delay in between for clarity
const runExamples = async () => {
  await handleFetchSequential();

  console.log("\n----------\n");

  await handleFetchParallel();
};

runExamples();
