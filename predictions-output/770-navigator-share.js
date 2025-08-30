// Navigator Share API
// Problem: How to share content using native share dialog?
// Solution
if (navigator.share) {
  navigator.share({ title: "Demo", text: "Hello", url: "https://example.com" });
}
// Conclusion: navigator.share triggers native share sheet.
