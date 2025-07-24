async function run() {
  for (let i = 0; i < 3; i++) {
    await new Promise(res => setTimeout(res, 100));
    console.log(i);
  }
}
run();
