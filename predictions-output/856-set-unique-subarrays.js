// Concept: Unique subarrays using Set of strings
// Problem: Deduplicate array of arrays.
// Solution:
const arr2 = [[1,2],[1,2],[3]];
const uniqueArrs=[...new Set(arr2.map(a=>JSON.stringify(a)))].map(s=>JSON.parse(s));
console.log(uniqueArrs); // [[1,2],[3]]
// Conclusion: Serialize to JSON for uniqueness.
