// Performance API
performance.mark("start");
for (let i = 0; i < 1e6; i++) {}
performance.mark("end");
performance.measure("loop", "start", "end");
console.log(performance.getEntriesByName("loop"));
