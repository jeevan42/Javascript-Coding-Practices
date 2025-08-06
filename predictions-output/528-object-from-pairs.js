const fromPairs = (pairs) => {
  return Object.fromEntries(pairs);
};

console.log(fromPairs([['a', 1], ['b', 2]])); // { a: 1, b: 2 }
