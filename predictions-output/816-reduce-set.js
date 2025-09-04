// Concept: Reduce Set
// Problem: Sum all elements of set.
// Solution:
function reduceSet(set, fn, init) {
  return [...set].reduce(fn, init);
}
console.log(reduceSet(new Set([1,2,3]), (a,b)=>a+b, 0)); // 6