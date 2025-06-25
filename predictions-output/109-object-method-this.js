// 🧠 `this` inside object method

const obj = {
  count: 10,
  log: function () {
    console.log(this.count); // ✅ 10
  }
};

obj.log();

// 🧠 Arrow functions don’t bind `this` — use regular functions