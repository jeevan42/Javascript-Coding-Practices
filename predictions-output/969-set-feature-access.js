// Feature Access
// Problem: Control user access to features.
// Solution:
const premiumFeatures = new Set(["download","export"]);
function canAccess(f) { return premiumFeatures.has(f); }
console.log(canAccess("download"));
console.log(canAccess("edit"));
// Conclusion: Sets manage access rights.