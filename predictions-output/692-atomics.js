// Atomics Example
const sab = new SharedArrayBuffer(16);
const view = new Int32Array(sab);

Atomics.store(view, 0, 10);
Atomics.add(view, 0, 5);
console.log("Atomic value:", Atomics.load(view, 0)); // 15
