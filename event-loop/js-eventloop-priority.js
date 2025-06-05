/*
📘 Task Priority:
1. Call stack execution
2. Microtasks (high priority)
3. Macrotasks (low priority)

✅ Example:

console.log("script start");

setTimeout(() => console.log("setTimeout"));

Promise.resolve().then(() => console.log("promise"));

console.log("script end");

📌 Output:
script start
script end
promise
setTimeout
*/