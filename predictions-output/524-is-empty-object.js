const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmptyObject({})); // true
