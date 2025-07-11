// 🧠 `.then()` can handle both resolve and reject

Promise.reject("Error").then(
  res => console.log("Resolved", res),
  err => console.log("Caught", err) // ✅ Caught Error
);