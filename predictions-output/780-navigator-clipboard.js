// navigator.clipboard
// Problem: Read/write text to clipboard securely.
// Solution
navigator.clipboard.writeText("Copied from JS").then(() => {
  console.log("Text copied!");
});
navigator.clipboard.readText().then(text => {
  console.log("Clipboard contains:", text);
});
// Conclusion: navigator.clipboard handles secure clipboard operations.
