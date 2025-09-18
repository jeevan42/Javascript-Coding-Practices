// Unique Orders
// Problem: Avoid processing same order twice.
// Solution:
const orders = new Set();
function process(orderId) {
  if (orders.has(orderId)) return "Duplicate ignored";
  orders.add(orderId);
  return "Order processed";
}
console.log(process(100));
console.log(process(100));
// Conclusion: Sets avoid duplicate processing.