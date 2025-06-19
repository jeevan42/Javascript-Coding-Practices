// 🧠 Default Parameters Evaluation Timing

function greet(name = "Guest") {
  console.log("Hello", name);
}

greet();          // ✅ Output: Hello Guest
greet(undefined); // ✅ Output: Hello Guest
greet(null);      // ✅ Output: Hello null
// 🧠 null is treated as a real value, not as a missing one
