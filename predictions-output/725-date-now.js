// Date.now
const start = Date.now();
for (let i = 0; i < 1e6; i++) {}
const end = Date.now();
console.log("Time taken(ms):", end - start);
