class Button {
  constructor() {
    this.count = 0;
    this.click = this.click.bind(this);
  }

  click() {
    this.count++;
    console.log(this.count);
  }
}
const b = new Button();
const handler = b.click;
handler(); // 1
