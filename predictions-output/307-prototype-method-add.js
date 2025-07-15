// 🧠 You can add methods to prototypes dynamically

Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log([1, 2, 3].last()); // ✅ 3