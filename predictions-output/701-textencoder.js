const encoder = new TextEncoder();
const uint8array = encoder.encode("Hello JS");
console.log(uint8array); // Uint8Array of bytes
