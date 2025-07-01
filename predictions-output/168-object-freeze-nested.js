// 🧠 Object.freeze is shallow

const user = {
  name: "Jeevan",
  address: { city: "Ludhiana" }
};

Object.freeze(user);
user.name = "G1"; // ❌ won't change
user.address.city = "Delhi"; // ✅ will change

// Deep freeze requires recursion