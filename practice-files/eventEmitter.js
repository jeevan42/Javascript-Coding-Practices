/**
 * Minimal EventEmitter implementation.
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(evt, handler) {
    if (!this.events[evt]) this.events[evt] = [];
    this.events[evt].push(handler);
  }

  emit(evt, ...args) {
    (this.events[evt] || []).forEach(fn => fn(...args));
  }

  off(evt, handler) {
    if (!this.events[evt]) return;
    this.events[evt] = this.events[evt].filter(fn => fn !== handler);
  }
}

// Example:
const ee = new EventEmitter();
function greet(name) { console.log(`Hello, ${name}!`); }
ee.on('hello', greet);
ee.emit('hello', 'Alice'); // "Hello, Alice!"
ee.off('hello', greet);
ee.emit('hello', 'Bob'); // (nothing)
