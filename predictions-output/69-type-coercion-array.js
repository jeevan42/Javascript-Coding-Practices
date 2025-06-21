// 🧠 Weird coercion behavior

console.log([] + []);        // ✅ ""
console.log([] + {});        // ✅ "[object Object]"
console.log({} + []);        // ✅ 0 or "[object Object]" depending on context

// 🧠 Array + Object coercion depends on types being coerced to strings
