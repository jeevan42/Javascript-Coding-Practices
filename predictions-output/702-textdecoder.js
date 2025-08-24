const decoder = new TextDecoder();
const uint8array = new Uint8Array([72, 101, 108, 108, 111]);
console.log(decoder.decode(uint8array)); // "Hello"
