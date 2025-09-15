// Tag Search with Set
// Problem: Filter items by matching tags.
// Solution:
function filterByTags(items, tags) {
  return items.filter(item => tags.every(t => item.tags.has(t)));
}
const items = [
  {name:"Post1", tags:new Set(["js","web"])},
  {name:"Post2", tags:new Set(["js"])},
];
console.log(filterByTags(items, ["js"]));
// Conclusion: Sets make tag filtering clean.
