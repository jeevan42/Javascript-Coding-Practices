// 🧠 eval runs in local scope

function test() {
  let a = 1;
  eval("a = 5");
  console.log(a); // ✅ 5
}

test();

// 🧠 Avoid eval unless absolutely necessary