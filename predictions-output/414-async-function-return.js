async function foo() {
  return 5;
}
foo().then(console.log); // 5 (wrapped in Promise)
