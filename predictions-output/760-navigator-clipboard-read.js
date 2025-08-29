// Navigator Clipboard Read
// Problem: How to read text from clipboard?
// Solution
navigator.clipboard.readText().then(text => {
  console.log("Clipboard content:", text);
});
// Conclusion: navigator.clipboard.readText() fetches clipboard data.