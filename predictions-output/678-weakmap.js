// Q: How is WeakMap useful?
let wm = new WeakMap();
let key = {};

wm.set(key, "secret");
console.log(wm.get(key)); // secret

// Answer: Stores private data linked to objects.
// Explanation: Keys must be objects, and garbage collection removes entries automatically.