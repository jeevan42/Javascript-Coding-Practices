// 🧠 Set considers all NaN as equal

const s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size); // ✅ 1