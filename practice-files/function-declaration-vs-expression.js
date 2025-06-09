/**
 * 🧠 Concept: Function Declaration vs Function Expression in JavaScript
 *
 * 📘 Definitions:
 * - Function Declaration: A function defined with the `function` keyword and a name, 
 *   declared as a standalone statement.
 * - Function Expression: A function assigned to a variable, can be named or anonymous.
 *
 * ---------------------------------------------------------
 *
 * 1️⃣ Function Declaration Example:
 */
function greet() {
  console.log("Hello from declaration!");
}

greet(); // Works fine

/**
 * 2️⃣ Function Expression Example:
 */
const greetExpr = function () {
  console.log("Hello from expression!");
};

greetExpr(); // Works fine

/**
 * ---------------------------------------------------------
 * 3️⃣ Key Differences:
 *
 * a) **Hoisting Behavior**
 * - Function Declarations are hoisted completely (function available anywhere in scope).
 * - Function Expressions are hoisted only as variables (undefined until assignment).
 *
 * Example:
 */

hoistedDeclaration(); // Works! Because declaration is hoisted.

function hoistedDeclaration() {
  console.log("This is a hoisted declaration.");
}

// hoistedExpression(); // Error: hoistedExpression is not a function

var hoistedExpression = function () {
  console.log("This is a function expression.");
};

hoistedExpression(); // Works after assignment

/**
 * b) **Naming**
 * - Function Declarations must have names.
 * - Function Expressions can be anonymous or named.
 *
 * Example:
 */
const anonFunc = function () {
  console.log("Anonymous function expression");
};

const namedFunc = function named() {
  console.log("Named function expression");
};

anonFunc();
namedFunc();

/**
 * c) **Use in callbacks**
 * Function expressions are common for passing functions as arguments.
 */

setTimeout(function () {
  console.log("Delayed greeting from function expression.");
}, 1000);

/**
 * d) **When to use?**
 * - Use Function Declarations for named functions you want hoisted and reusable.
 * - Use Function Expressions when assigning functions dynamically or as callbacks.
 *
 * ---------------------------------------------------------
 *
 * 4️⃣ Arrow Functions (related to expressions)
 * - Arrow functions are always expressions.
 * - They differ from traditional functions in `this` binding and lack of `arguments` object.
 *
 * Example:
 */
const arrowFunc = () => {
  console.log("Hello from arrow function!");
};

arrowFunc();

/**
 * ---------------------------------------------------------
 *
 * 🔥 Summary:
 * - Function Declarations: hoisted, named, good for reusable functions.
 * - Function Expressions: assigned to variables, can be anonymous, not fully hoisted.
 * - Hoisting difference often causes confusion.
 */
