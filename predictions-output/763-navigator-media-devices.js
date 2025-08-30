// Navigator Media Devices
// Problem: How to access camera and microphone?
// Solution
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => console.log("Media stream:", stream));
// Conclusion: navigator.mediaDevices provides audio/video streams.
