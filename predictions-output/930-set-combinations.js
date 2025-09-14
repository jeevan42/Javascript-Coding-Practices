// Combinations with Set
// Problem: Generate all combinations from Set values.
// Solution:
function combinations(arr) {
  const result = [[]];
  for (const el of arr) {
    const newCombos = result.map(c => [...c, el]);
    result.push(...newCombos);
  }
  return result;
}
console.log(combinations([...new Set([1,2,3])]));
// Conclusion: Sets can seed combination generation.
