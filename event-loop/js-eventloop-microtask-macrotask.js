/*
📘 Microtasks vs Macrotasks:
- Microtasks: Promises, MutationObserver, queueMicrotask
- Macrotasks: setTimeout, setInterval, setImmediate, I/O

✅ Example:

console.log("Start");

setTimeout(() => console.log("Macrotask: Timeout"));

Promise.resolve().then(() => console.log("Microtask: Promise"));

console.log("End");

📌 Output:
Start
End
Microtask: Promise
Macrotask: Timeout

📌 Microtasks run right after current stack before macrotasks.
*/
