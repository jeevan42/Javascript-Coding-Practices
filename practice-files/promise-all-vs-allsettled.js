/**
 * 🧠 Concept: Promise.all() vs Promise.allSettled()
 *
 * 📘 Definition:
 * Both are used to handle multiple promises concurrently but differ in how they handle promise rejections.
 *
 * ---------------------------------------------------------
 *
 * 1️⃣ Promise.all(promises)
 * - Waits for all promises to resolve.
 * - If any promise rejects, immediately rejects with that error.
 * - Returns an array of resolved values.
 *
 * Example:
 */
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject('Error!');

Promise.all([p1, p2])
  .then(results => console.log('All resolved:', results)) // [1, 2]
  .catch(err => console.log('Error:', err));

Promise.all([p1, p3])
  .then(results => console.log('All resolved:', results))
  .catch(err => console.log('Rejected:', err)); // Rejected: Error!

/**
 * 2️⃣ Promise.allSettled(promises)
 * - Waits for all promises to settle (resolve or reject).
 * - Never rejects.
 * - Returns an array of objects describing outcome of each promise.
 *
 * Example:
 */
Promise.allSettled([p1, p3])
  .then(results => {
    console.log('All Settled:', results);
    /*
    [
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'Error!' }
    ]
    */
  });

/**
 * 3️⃣ When to use which?
 * - Use Promise.all when you want all tasks to succeed or fail fast.
 * - Use Promise.allSettled when you want to know outcome of every promise regardless of failure.
 *
 * ---------------------------------------------------------
 *
 * 4️⃣ Summary Table:
 *
 * | Feature          | Promise.all         | Promise.allSettled      |
 * |------------------|---------------------|------------------------|
 * | Wait for all     | Yes                 | Yes                    |
 * | Reject on failure| Yes (fast fail)     | No (wait all to settle)|
 * | Return value     | Array of values     | Array of status objects |
 * | Error handling   | Try/catch on whole  | Check each result's status |
 *
 * ---------------------------------------------------------
 *
 * 🔥 Practical Example: Fetch multiple APIs and handle partial failures gracefully
 */

async function fetchMultiple() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/invalid-url', // invalid
    'https://jsonplaceholder.typicode.com/users/1',
  ];

  const promises = urls.map(url => fetch(url).then(res => res.json()));

  // Using Promise.allSettled
  const results = await Promise.allSettled(promises);

  results.forEach((result, idx) => {
    if (result.status === 'fulfilled') {
      console.log(`Result ${idx}:`, result.value);
    } else {
      console.log(`Error in request ${idx}:`, result.reason);
    }
  });
}

fetchMultiple();
