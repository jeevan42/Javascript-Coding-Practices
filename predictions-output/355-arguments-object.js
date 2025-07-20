function test(a, b) {
  arguments[0] = 10;
  console.log(a); // 10
}
test(5, 6);