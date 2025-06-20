// 🧠 Blocking the Event Loop

setTimeout(() => console.log("Timer Done"), 0);

for (let i = 0; i < 1e9; i++) {} // heavy blocking

console.log("After loop");

// ✅ Output:
// After loop
// Timer Done
// 🧠 Blocking JS prevents timer from running immediately
