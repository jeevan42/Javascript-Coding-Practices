// 🧠 Array Destructuring and Skipping

const [a, , b] = [1, 2, 3];

console.log(a); // ✅ 1
console.log(b); // ✅ 3

const [x = 10, y] = [undefined, 5];
console.log(x); // ✅ 10
console.log(y); // ✅ 5
// 🧠 Default only applies if value is undefined
