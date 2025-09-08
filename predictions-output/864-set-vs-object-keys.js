// Concept: Compare Set vs Object keys
// Problem: When to prefer Set over object keys?
// Solution:
const objKeys={}; objKeys["a"]=true;
const s=new Set(["a"]);
console.log("Object has:", "a" in objKeys);
console.log("Set has:", s.has("a"));
// Conclusion: Sets provide clearer semantics for uniqueness.
