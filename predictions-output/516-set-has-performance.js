const arr = Array.from({ length: 1e5 }, (_, i) => i);
const set = new Set(arr);
console.time("Array");
arr.includes(99999);
console.timeEnd("Array");

console.time("Set");
set.has(99999);
console.timeEnd("Set");
