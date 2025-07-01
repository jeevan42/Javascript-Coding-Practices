// 🧠 Positive lookahead (?=...) and negative (?!...)

const str = "hello1 hello2 hello3";
const match = str.match(/hello(?=\d)/g); 

console.log(match); // ✅ ['hello', 'hello', 'hello']

// Match 'hello' only if followed by digit