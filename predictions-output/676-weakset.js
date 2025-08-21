// Q: What is a WeakSet?
let ws = new WeakSet();
let obj = {};

ws.add(obj);
console.log(ws.has(obj)); // true

// Answer: WeakSet stores only objects, holds weak references.
// Explanation: Objects can be garbage-collected, no size property available.