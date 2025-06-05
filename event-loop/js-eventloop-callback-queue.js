/*
📘 Callback Queue Explained:
The **Callback Queue** (a.k.a. Task Queue or Message Queue) holds messages or events (e.g., callbacks from setTimeout, DOM events).

These callbacks wait until the **Call Stack** is empty, and then get pushed into the stack by the **Event Loop**.

✅ Example:

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

📌 Output:
Start
End
Timeout callback

🧠 Key Insight:
- setTimeout adds the callback to the Web API environment.
- After delay, the callback moves to the callback queue.
- Event loop checks if the call stack is empty.
- If yes, it pushes the callback to the stack.

🔁 This mechanism helps JavaScript remain non-blocking while still being single-threaded.
*/