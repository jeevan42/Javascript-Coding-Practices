function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();       // Hello, Guest!
greet("Ron");  // Hello, Ron!