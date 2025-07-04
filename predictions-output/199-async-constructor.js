// 🧠 Constructors can't be async

class MyClass {
  constructor() {
    // await Promise.resolve(); ❌ SyntaxError
  }
}