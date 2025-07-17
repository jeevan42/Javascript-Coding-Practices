async function test() {
  return 5;
}
test().then(console.log); // 5 (async always returns a promise)