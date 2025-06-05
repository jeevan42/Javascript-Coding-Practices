/*
📘 JavaScript Event Loop - Complete Overview

🧠 JavaScript is single-threaded but non-blocking. The Event Loop is the backbone of how JS handles async operations like timers, promises, and events.

🌐 Components Involved:
1. **Call Stack** - Executes synchronous code (LIFO)
2. **Web APIs** - Provided by browsers (e.g., setTimeout, DOM events, fetch)
3. **Callback Queue** - Holds callbacks from Web APIs
4. **Microtask Queue** - Holds promise-related callbacks (e.g., .then, catch, finally)
5. **Event Loop** - Coordinator that pushes callbacks to the call stack when it's empty

🔁 Flow Summary:
- Synchronous code runs in the call stack.
- Async tasks are passed to Web APIs.
- Once async operations finish, their callbacks go to the Callback or Microtask Queue.
- The Event Loop constantly checks:
   - Is the call stack empty?
   - If yes → process all Microtasks first.
   - Then → process one task from the Callback Queue.

✅ Example:

console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

📌 Output:
A
D
C
B

Explanation:
- 'A' & 'D' → synchronous, go first.
- Promise → microtask → 'C' runs before setTimeout.
- setTimeout → callback queue → 'B' runs after microtasks.

⚠️ Microtasks ALWAYS run before callback queue tasks!

🔧 Use Case:
- Prioritize UI updates with microtasks.
- Avoid blocking main thread with long sync tasks.

📌 Conclusion:
- The Event Loop enables **asynchronous, non-blocking behavior** in JS.
- Mastering it is crucial for writing efficient, responsive apps.
*/
