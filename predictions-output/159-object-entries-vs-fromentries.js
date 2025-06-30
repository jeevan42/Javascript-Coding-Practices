// 🧠 Object.entries + Object.fromEntries

const obj = { a: 1, b: 2 };
const entries = Object.entries(obj); // ✅ [['a', 1], ['b', 2]]

const back = Object.fromEntries(entries); // ✅ { a: 1, b: 2 }

// 🔄 Great for transformation via `.map()` chains