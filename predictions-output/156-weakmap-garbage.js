// 🧠 WeakMap doesn't prevent garbage collection

let obj = { name: "secret" };
const map = new WeakMap();
map.set(obj, "data");

obj = null; // ✅ eligible for GC

// ⚠️ WeakMaps are great for memory-leaky safe cache/privates