class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog barks");
  }
}
new Dog().speak();
// Output: Animal speaks, Dog barks
