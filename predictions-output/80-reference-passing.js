// 🧠 Objects are passed by reference

const obj = { count: 1 };
function increment(o) {
  o.count += 1;
}
increment(obj);
console.log(obj.count); // ✅ 2

// 🧠 Object references can be modified inside functions