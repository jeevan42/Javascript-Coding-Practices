// Unique Objects by Multiple Keys
// Problem: Deduplicate objects by composite key.
// Solution:
function uniqueByMultiple(arr, keys) {
  const seen = new Set();
  return arr.filter(obj => {
    const id = keys.map(k => obj[k]).join("-");
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}
console.log(uniqueByMultiple([{a:1,b:2},{a:1,b:2},{a:2,b:3}], ["a","b"]));
// Conclusion: Use composite key string for uniqueness.
