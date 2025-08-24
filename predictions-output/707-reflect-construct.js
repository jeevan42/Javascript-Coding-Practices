function Car(make) { this.make = make; }
const car = Reflect.construct(Car, ["Toyota"]);
console.log(car.make); // "Toyota"
