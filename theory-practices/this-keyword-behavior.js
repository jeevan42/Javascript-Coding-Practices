/**
 * 📌 Understanding 'this' in JavaScript
 *
 * 'this' refers to the object from which a function is called.
 * It behaves differently based on how the function is invoked.
 */

// ==============================
// 1. Global Scope
// ==============================
console.log(this); // In browser: Window, In Node: {}

// ==============================
// 2. In Regular Function
// ==============================
function show() {
  console.log(this); // In strict mode: undefined, else global object
}
show();

// ==============================
// 3. Inside Method (Object)
// ==============================
const obj = {
  name: "Jeevan",
  greet: function () {
    console.log("Hello", this.name); // refers to obj
  }
};
obj.greet();

// ==============================
// 4. Arrow Function
// ==============================
const user = {
  name: "Arrow",
  greet: () => {
    console.log(this.name); // ❌ undefined, 'this' is not bound in arrow
  }
};
user.greet();

// ==============================
// 5. With call, apply, bind
// ==============================
function welcome() {
  console.log("Welcome", this.name);
}

const person = { name: "John" };
welcome.call(person);  // 'this' bound to person
welcome.apply(person);
const boundFn = welcome.bind(person);
boundFn();
