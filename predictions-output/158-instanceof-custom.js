// 🧠 Customize instanceof with Symbol.hasInstance

class AlwaysTrue {
  static [Symbol.hasInstance]() {
    return true;
  }
}

console.log({} instanceof AlwaysTrue); // ✅ true

// ⚠️ Use responsibly — can break mental model