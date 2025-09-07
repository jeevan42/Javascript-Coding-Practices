// Concept: Store unique pairs using Set
// Problem: Ensure only unique pairs exist.
// Solution:
const pairs=[[1,2],[2,1],[3,4]];
const uniquePairs=[...new Set(pairs.map(p=>JSON.stringify(p.sort())))].map(s=>JSON.parse(s));
console.log(uniquePairs); // [[1,2],[3,4]]
// Conclusion: Sort then stringify for uniqueness.
