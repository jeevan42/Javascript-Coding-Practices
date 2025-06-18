/**
 * 📌 EVENT DELEGATION IN JAVASCRIPT
 *
 * 🔍 What is Event Delegation?
 * Event Delegation is a technique where a **single event listener** is added to a parent element 
 * instead of individual children. It leverages **event bubbling** to capture events from child nodes.
 *
 * ✅ Benefits:
 * - Improved performance (fewer listeners)
 * - Dynamically handle future child elements
 * - Cleaner and maintainable code
 */

// ============================================
// 🧪 Example 1: Without Delegation (Inefficient)
// ============================================

const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("click", () => {
    console.log("Clicked:", item.textContent);
  });
});

/**
 * ❌ Problem: Each item gets its own listener. Not efficient.
 * ❌ New items added dynamically won't respond.
 */

// ============================================
// ✅ Example 2: With Event Delegation (Efficient)
// ============================================

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    console.log("Delegated Click:", e.target.textContent);
  }
});

/**
 * ✅ One listener handles all `.item` clicks via bubbling.
 * ✅ Works even for new items added later dynamically.
 */

// ============================================
// 💡 Real-world Use Case:
// ============================================
// - Click handlers on dynamic to-do lists, tables, dropdowns.
// - Handling clicks on nav menus, modals, forms with dynamic fields.

// ============================================
// 👇 Example DOM Structure
// ============================================
/**
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<script>
  // Add new item dynamically
  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.textContent = "Item 4";
  document.querySelector(".container").appendChild(newItem);
</script>
 */

// ============================================
// 🔁 Summary:
// ============================================
/**
 * - Use event delegation when working with many similar child elements.
 * - Improves performance and allows easier maintenance.
 * - Use event.target and class checks to act conditionally.
 */

