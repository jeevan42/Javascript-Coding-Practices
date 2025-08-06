const countVowels = (str) => {
  return (str.match(/[aeiou]/gi) || []).length;
};

console.log(countVowels("hello")); // 2
