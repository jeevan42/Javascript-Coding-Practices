// js-eventloop-callstack.js
/*
📘 Call Stack:
The call stack is a data structure that keeps track of function calls.
Each function call is added to the stack and removed once completed.

function foo() {
  console.log("foo");
}
function bar() {
  foo();
}
bar();

📌 Order:
1. bar pushed
2. foo pushed
3. foo popped after console
4. bar popped
*/