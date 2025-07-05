// 🧠 Anonymous function from variable still gets a name

const myFunc = function () {};

console.log(myFunc.name); // ✅ 'myFunc'