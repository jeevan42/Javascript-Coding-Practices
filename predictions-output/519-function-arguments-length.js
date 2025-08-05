function test(a, b) {
  console.log(arguments.length); // 3
  console.log(test.length);      // 2
}
test(1, 2, 3);
