// 🧠 Adding object to number triggers `valueOf` or `toString`

const obj = {
  valueOf: () => 3
};

console.log(2 + obj); // ✅ 5