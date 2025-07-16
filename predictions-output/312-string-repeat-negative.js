// 🧠 Negative values passed to `repeat()` throw a RangeError

try {
  console.log("hi".repeat(-1));
} catch (e) {
  console.log("Error:", e.message); // ✅ Error: Invalid count value
}