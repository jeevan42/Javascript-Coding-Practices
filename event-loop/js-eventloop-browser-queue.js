/*
📘 Browser Queues:
JavaScript engine + Web APIs + Callback Queue + Microtask Queue + Event Loop

✅ Flow:
1. JS code runs in call stack
2. Async APIs (setTimeout, fetch) are handled by browser
3. Once done, callbacks are pushed to macrotask queue
4. Event loop moves them to stack when it's empty
5. Microtasks are executed before macrotasks
*/
