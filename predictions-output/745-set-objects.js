// Objects in Set
// Problem: How does Set handle objects?
// Solution
const setObj = new Set();
setObj.add({id: 1});
setObj.add({id: 1});
console.log(setObj.size); // 2 (different references)
// Conclusion: Set treats objects with different references as unique.