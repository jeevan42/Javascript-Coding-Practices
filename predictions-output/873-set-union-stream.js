// Concept: Streaming union
// Problem: Merge streaming data chunks uniquely.
// Solution:
let unionSet=new Set();
[ [1,2],[2,3],[3,4] ].forEach(chunk=>chunk.forEach(v=>unionSet.add(v)));
console.log(unionSet);
// Conclusion: Add chunked stream values to Set.
