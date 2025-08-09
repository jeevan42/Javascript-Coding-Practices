const obj = {
  fn: () => 'Hello'
};

console.log(obj.fn?.()); // 'Hello'
console.log(obj.missing?.()); // undefined
