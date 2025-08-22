// String matchAll
const str = "test1 test2";
const regex = /test(\d)/g;
for (const match of str.matchAll(regex)) {
  console.log(match[0], match[1]);
}
