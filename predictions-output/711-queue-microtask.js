// Example of queueMicrotask
console.log("Start");
queueMicrotask(() => console.log("Microtask executed"));
console.log("End");