const obj = {};
Reflect.defineProperty(obj, "name", { value: "JS", writable: true });
console.log(obj.name); // "JS"
