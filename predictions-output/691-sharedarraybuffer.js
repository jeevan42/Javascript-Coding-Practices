// SharedArrayBuffer Example
const sab = new SharedArrayBuffer(16); // 16 bytes
const view = new Int32Array(sab);

view[0] = 123;
console.log("SharedArrayBuffer value:", view[0]);
