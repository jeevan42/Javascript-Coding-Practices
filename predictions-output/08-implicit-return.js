// 🧠 Implicit Return in Arrow Function

const getData = () => ({ user: "Jeevan" });
console.log(getData()); 
// ✅ Output: { user: "Jeevan" }
// 🧠 Explanation:
// When using arrow functions, to implicitly return an object, 
// wrap the object in parentheses. Otherwise, `{}` is treated as a block.
