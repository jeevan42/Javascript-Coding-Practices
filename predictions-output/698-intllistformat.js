// Intl.ListFormat Example
const lf = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
console.log(lf.format(["Apple", "Banana", "Orange"])); 
// "Apple, Banana, and Orange"
