// Q: What is dynamic import()?
(async () => {
  const { default: fs } = await import("fs");
  console.log("fs loaded dynamically:", typeof fs);
})();

// Answer: import() loads modules on demand.
// Explanation: Useful for lazy loading and code splitting.