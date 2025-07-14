// 🧠 Floating point loop may never end

for (let i = 0.1; i !== 1.0; i += 0.1) {
  console.log(i); // ❌ May never hit exactly 1.0 due to precision
}