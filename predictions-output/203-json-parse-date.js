// 🧠 Dates turn into strings when JSON.stringified

const date = new Date();
const str = JSON.stringify({ now: date });

console.log(JSON.parse(str).now); 
// ❌ Not Date — just ISO string