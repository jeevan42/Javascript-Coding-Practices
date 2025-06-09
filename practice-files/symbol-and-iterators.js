/**
 * 🧠 Concept: Symbols and Iterators in JavaScript
 *
 * 📘 Definition:
 * - Symbol: A unique and immutable primitive value used as object property keys.
 * - Iterator: An object that provides a sequence of values, typically via a `.next()` method.
 *
 * 🔑 Why Symbols?
 * - To create unique keys that don’t clash with other keys.
 * - Used internally by JS to define special behaviors (e.g. iteration).
 *
 * 🔑 Why Iterators?
 * - To define custom iteration behavior for objects.
 * - Used by for...of loops, spread operator, etc.
 *
 * --------------------------------------------------------------
 *
 * 1️⃣ Using Symbol for Unique Keys
 */

const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false, symbols are unique

const user = {
  name: 'Jeevan',
  [sym1]: 12345, // symbol key
};

console.log(user[sym1]); // 12345
console.log(user.sym1); // undefined (because sym1 is a variable, not a string key)

/**
 * 2️⃣ Iterators & Iterable Protocol
 * - An object is iterable if it implements Symbol.iterator method returning an iterator.
 * - Iterator object must have a `.next()` method returning {value, done}.
 */

// Example: Custom iterable object

const myIterable = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

// Using for...of on iterable object
for (const val of myIterable) {
  console.log(val); // 10, 20, 30
}

// Spread operator works on iterables
const arr = [...myIterable];
console.log(arr); // [10, 20, 30]

/**
 * 3️⃣ Built-in Iterables
 * - Arrays, Strings, Maps, Sets all have Symbol.iterator implemented.
 */

const str = "JS Symbols";
for (const ch of str) {
  console.log(ch); // logs each character
}

/**
 * 4️⃣ Why use Iterators?
 * - Custom iteration for objects like trees, graphs.
 * - Lazy iteration (generate values on demand).
 * - Control iteration logic.
 */

/**
 * 🔥 Summary:
 * - Symbols are unique keys used to avoid property conflicts.
 * - Symbol.iterator is the key to making objects iterable.
 * - Iterators return {value, done} objects on each `.next()` call.
 * - for...of and spread work with iterables.
 */
