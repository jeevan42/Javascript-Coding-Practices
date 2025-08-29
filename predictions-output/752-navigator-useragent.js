// navigator.userAgent
Problem: Detect browser and version using JS.
Solution:

console.log(navigator.userAgent);

Conclusion: userAgent returns a string with browser details. Use feature detection instead of UA sniffing when possible.