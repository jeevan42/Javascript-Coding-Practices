// Navigator USB
// Problem: How to request USB device access?
// Solution
if ("usb" in navigator) {
  navigator.usb.requestDevice({ filters: [] }).then(device => {
    console.log("USB device:", device);
  });
}
// Conclusion: navigator.usb allows USB communication (with permission).
