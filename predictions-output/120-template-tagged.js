// 🧠 Tagged template literal

function tag(strings, ...values) {
  console.log(strings); // ✅ ["Hi ", ", you're ", "!"]
  console.log(values);  // ✅ ["Jeevan", "awesome"]
}

const name = "Jeevan";
const mood = "awesome";
tag`Hi ${name}, you're ${mood}!`;

// 🧠 Great for customizing template output