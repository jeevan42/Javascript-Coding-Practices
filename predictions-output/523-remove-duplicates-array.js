const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
