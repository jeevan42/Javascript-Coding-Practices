// 🧠 .finally runs regardless of resolution or rejection

Promise.reject("error")
  .catch(err => console.log("Caught:", err))
  .finally(() => console.log("Done"));

// ✅ Output: Caught: error → Done