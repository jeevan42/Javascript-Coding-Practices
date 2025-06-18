// 🧠 'this' Keyword Prediction

const user = {
  name: "Jeevan",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  }
};

user.regular(); 
// ✅ Output: Regular: Jeevan
// 🧠 Explanation: In regular functions, `this` refers to the calling object (`user` here).

user.arrow();   
// ❌ Output: Arrow: undefined
// 🧠 Explanation: Arrow functions don’t have their own `this` — they inherit from the surrounding (lexical) scope.
// At the top-level, `this` refers to the global object in browsers (not `user`).
