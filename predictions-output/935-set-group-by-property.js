// Group by Property with Set
// Problem: Group objects by a property using Sets.
// Solution:
function groupByProperty(arr, key) {
  const map = new Map();
  arr.forEach(obj => {
    if (!map.has(obj[key])) map.set(obj[key], new Set());
    map.get(obj[key]).add(obj);
  });
  return map;
}
console.log(groupByProperty([{type:'a'},{type:'b'},{type:'a'}], "type"));
// Conclusion: Map + Set helps categorize data.
