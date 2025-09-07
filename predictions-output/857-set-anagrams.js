// Concept: Group anagrams using Set
// Problem: Group words that are anagrams.
// Solution:
const words=["eat","tea","tan","ate","nat","bat"];
const groups2=new Map();
words.forEach(w=>{
  const key=w.split("").sort().join("");
  if(!groups2.has(key)) groups2.set(key,new Set());
  groups2.get(key).add(w);
});
console.log(groups2);
// Conclusion: Use sorted string as grouping key.
