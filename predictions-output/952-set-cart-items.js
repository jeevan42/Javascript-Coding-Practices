// Shopping Cart with Set
// Problem: Avoid duplicate items in cart.
// Solution:
const cart = new Set();
cart.add("Shoes"); cart.add("Shoes"); cart.add("Shirt");
console.log(cart);
// Conclusion: Sets prevent duplicate cart entries.
