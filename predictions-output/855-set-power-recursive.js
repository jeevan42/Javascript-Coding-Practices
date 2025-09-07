// Concept: Recursive Power Set
// Problem: Alternative recursive power set generation.
// Solution:
function powerSet(arr) {
  if (arr.length===0) return [[]];
  const [first,...rest]=arr;
  const without=powerSet(rest);
  const withFirst=without.map(s=>[first,...s]);
  return [...without,...withFirst];
}
console.log(powerSet([1,2]));
// Conclusion: Another way to generate power set.
