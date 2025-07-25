class Counter {
  constructor() {
    let count = 0;
    this.inc = () => ++count;
    this.get = () => count;
  }
}
const c = new Counter();
c.inc();
console.log(c.get()); // 1
