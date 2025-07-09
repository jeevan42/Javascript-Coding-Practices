// 🧠 `this` inside setTimeout points to global (non-arrow)

const obj = {
  name: "Jeevan",
  greet: function () {
    setTimeout(function () {
      console.log(this.name); // ❌ undefined (not 'obj')
    }, 100);
  }
};

obj.greet();