/*
📘 Problem 03: Count Occurrences by Key

Given an array of product objects, count how many products belong to each category.

✅ Your Task:
- Loop through the array.
- Use an object to store category counts.
- Return an object where keys are category names and values are the count.

🔍 Example:
const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shoes", category: "Fashion" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Fashion" },
  { id: 5, name: "Watch", category: "Accessories" },
];

✅ Expected Output:
{
  Electronics: 2,
  Fashion: 2,
  Accessories: 1
}

💡 Explanation:
Loop through the array. For each product, increase the count of its category in the object.
If the category doesn't exist yet, initialize it with 1.
*/

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shoes", category: "Fashion" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Fashion" },
  { id: 5, name: "Watch", category: "Accessories" },
];

// ✅ Solution 1: Using basic loop
const countByCategory1 = (items) => {
  const counts = {};
  for (const item of items) {
    counts[item.category] = (counts[item.category] || 0) + 1;
  }
  return counts;
};

// ✅ Solution 2: Using reduce
const countByCategory2 = (items) => {
  return items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
};

console.log('countByCategory1:', countByCategory1(products));
console.log('countByCategory2:', countByCategory2(products));
