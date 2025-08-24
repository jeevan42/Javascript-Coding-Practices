const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);
view.setInt32(0, 12345);
console.log(view.getInt32(0)); // 12345
