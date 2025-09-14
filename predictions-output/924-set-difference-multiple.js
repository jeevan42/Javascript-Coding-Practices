// Difference of Multiple Sets
// Problem: Subtract multiple sets from one.
// Solution:
function differenceAll(base, ...others) {
  return others.reduce((a, b) => new Set([...a].filter(x => !b.has(x))), base);
}
console.log(differenceAll(new Set([1,2,3,4]), new Set([2,3]), new Set([4])));
// Conclusion: Chain difference with reduce.
