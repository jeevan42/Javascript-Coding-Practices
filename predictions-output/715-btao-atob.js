// Encoding and decoding base64
const encoded = btoa("Hello");
const decoded = atob(encoded);
console.log(encoded, decoded);