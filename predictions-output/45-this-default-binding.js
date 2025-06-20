// 🧠 Default binding of `this`

function show() {
  console.log(this);
}

show(); 
// ✅ Global object (or undefined in strict mode)
