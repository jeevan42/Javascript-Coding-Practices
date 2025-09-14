// Permutations with Set
// Problem: Generate all permutations from Set values.
// Solution:
function permutations(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  arr.forEach((el, i) => {
    const rest = arr.slice(i+1).concat(arr.slice(0,i));
    permutations(rest).forEach(p => result.push([el].concat(p)));
  });
  return result;
}
console.log(permutations([...new Set([1,2,3])])); 
// Conclusion: Sets can seed permutation generation.
