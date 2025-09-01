// navigator.mediaDevices
// Problem: Access microphone/camera from browser.
// Solution
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => console.log("Media stream started:", stream))
  .catch(err => console.error("Error:", err));
// Conclusion: navigator.mediaDevices provides camera/mic access.
