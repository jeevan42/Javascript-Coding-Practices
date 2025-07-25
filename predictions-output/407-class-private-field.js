class Secret {
  #code = 1234;
  reveal() {
    return this.#code;
  }
}
const s = new Secret();
console.log(s.reveal()); // 1234
