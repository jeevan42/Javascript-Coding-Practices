/*
📘 Misconception: setTimeout with 0ms runs immediately

setTimeout(() => console.log("timeout"), 0);
console.log("after timeout");

📌 Output:
after timeout
timeout

Even with 0ms, it waits for current call stack and microtasks to complete.
*/
