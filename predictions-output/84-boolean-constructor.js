// 🧠 Boolean constructor vs cast

const val = Boolean(0);          // false
const objVal = new Boolean(0);   // object (truthy)

console.log(val);                // false
console.log(objVal);             // [Boolean: false]
console.log(!!objVal);           // ✅ true

// 🧠 Boolean objects are truthy even when wrapping false