// WeakSet Intro
// Problem: What is WeakSet and why use it?
// Solution
const ws = new WeakSet();
let obj1 = {a: 1};
ws.add(obj1);
obj1 = null; // eligible for GC
// Conclusion: WeakSet stores objects weakly, allows garbage collection.