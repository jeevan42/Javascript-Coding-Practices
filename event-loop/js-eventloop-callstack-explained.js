/*
📘 Call Stack Explained:
The Call Stack works on the **LIFO (Last In, First Out)** principle.
Each time a function is invoked, it gets **pushed** onto the stack.
When the function finishes, it gets **popped** off the stack.

Let's go step by step through the example:

function foo() {
  console.log("foo");
}
function bar() {
  foo();
}
bar();

✅ Step-by-step:
1. Global context starts running → pushed onto the stack.
2. `bar()` is called → `bar` is pushed onto the stack.
3. Inside `bar()`, `foo()` is called → `foo` is pushed onto the stack.
4. `foo()` runs `console.log("foo")` → prints "foo".
5. `foo` finishes execution → popped from the stack.
6. `bar` finishes execution → popped from the stack.
7. Global context finishes.

📌 Final console output:
foo

🧠 Key Insight:
- The stack helps JavaScript keep track of **which function is currently running**, and what to return to after that.
- Once the stack is empty, the JavaScript engine can process events (via the event loop).
*/
