// TextDecoder usage
const decoder = new TextDecoder();
const bytes = new Uint8Array([72, 105]);
console.log(decoder.decode(bytes));