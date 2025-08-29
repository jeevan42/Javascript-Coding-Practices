// Navigator Clipboard API
// Problem: How to copy text to clipboard using navigator?
// Solution
navigator.clipboard.writeText("Hello from Clipboard API").then(() => {
  console.log("Text copied!");
});
// Conclusion: navigator.clipboard allows clipboard read/write.