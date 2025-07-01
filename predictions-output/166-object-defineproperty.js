// 🧠 Object.defineProperty() with fine control

const user = {};
Object.defineProperty(user, 'role', {
  value: 'admin',
  writable: false,
  enumerable: true,
  configurable: false,
});

user.role = 'guest'; 
console.log(user.role); // ✅ 'admin' — not changed