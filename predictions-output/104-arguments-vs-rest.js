// 🧠 arguments vs rest parameters

function testArgs(a, b) {
  console.log(arguments.length); // ✅ 2
}

function testRest(...args) {
  console.log(args.length); // ✅ variable
}

testArgs(1, 2, 3);
testRest(1, 2, 3);

// 🧠 `arguments` is array-like; rest is true array