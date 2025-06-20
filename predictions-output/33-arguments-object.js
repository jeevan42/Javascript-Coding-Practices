// 🧠 arguments object behavior

function test(x) {
  arguments[0] = 99;
  console.log(x); // ✅ 99 (in non-strict mode)
}

test(10);

// 🧠 In non-strict mode, `arguments` is linked to parameters.
// In strict mode, they are decoupled.
