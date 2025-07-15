// 🧠 console.log(undefinedVar) throws ReferenceError

try {
  console.log(notDefined); // ❌ ReferenceError
} catch (e) {
  console.log("Caught:", e.message);
}