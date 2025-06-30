// 🧠 Date parsing behaves inconsistently across formats

console.log(new Date("2023-12-31")); // ✅ ISO format, valid
console.log(new Date("12/31/2023")); // ⚠️ Locale-dependent (MM/DD/YYYY in some)

console.log(new Date("31/12/2023")); // ❌ Invalid in most environments

// ✅ Always prefer ISO: YYYY-MM-DD