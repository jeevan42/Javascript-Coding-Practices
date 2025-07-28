async function run() {
  const arr = [Promise.resolve(1), Promise.resolve(2)];
  for await (const val of arr) {
    console.log(val);
  }
}
run();