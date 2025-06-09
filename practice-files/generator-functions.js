/**
 * 🧠 Concept: Generator Functions in JavaScript
 * 
 * 📘 Definition:
 *   Generator functions allow you to pause execution and resume it later, producing a sequence of values on demand.
 * 
 * 🔑 Syntax:
 *   function* name() { ... }
 * 
 * 🎯 Why use generators?
 * - Lazy evaluation (generate values as needed)
 * - Can manage async flow before async/await existed
 * - Implement custom iterators easily
 * 
 * 👇 Example: Basic generator
 */

function* simpleGenerator() {
  console.log("Start");
  yield 1;            // pause and return 1
  console.log("After yield 1");
  yield 2;            // pause and return 2
  console.log("After yield 2");
  yield 3;            // pause and return 3
  console.log("End");
}

// Using the generator
const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/**
 * 🧠 Explanation:
 * - Each call to `.next()` resumes execution until next `yield` or function end.
 * - The `value` is the yielded value, `done` is true when generator finishes.
 * 
 * 🔥 Use case: Infinite sequence generator
 */

function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const seq = infiniteSequence();
console.log(seq.next().value); // 0
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2

/**
 * 🧠 Advanced: Passing values into generator
 */

function* adder() {
  const a = yield "Give first number";
  const b = yield "Give second number";
  yield a + b;
}

const addGen = adder();

console.log(addGen.next()); // { value: "Give first number", done: false }
console.log(addGen.next(5)); // { value: "Give second number", done: false }
console.log(addGen.next(10)); // { value: 15, done: false }
console.log(addGen.next()); // { value: undefined, done: true }

/**
 * 🔥 Summary:
 * - Generators produce iterable sequences lazily.
 * - You can pause/resume execution with `yield`.
 * - `.next(value)` can pass data back into the generator.
 * - Useful for custom iteration, async flows, or infinite sequences.
 */

