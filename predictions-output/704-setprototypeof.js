const animal = { speak: () => console.log("sound") };
const dog = {};
Object.setPrototypeOf(dog, animal);
dog.speak(); // "sound"
