// 🧠 class vs constructor function behavior

class A {
  constructor() {
    this.value = 1;
  }
}

// A(); 
// ❌ TypeError: Class constructor A cannot be invoked without 'new'

function B() {
  this.value = 2;
}

B(); 
// ✅ Works (but `this` binds to global or undefined)
