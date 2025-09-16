// Feature Flags with Set
// Problem: Enable/disable features for users.
// Solution:
const flags = new Set(["beta","darkmode"]);
console.log(flags.has("beta"));
flags.delete("beta");
console.log(flags.has("beta"));
// Conclusion: Sets manage flags flexibly.
