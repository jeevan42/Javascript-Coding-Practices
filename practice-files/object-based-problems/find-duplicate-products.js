/*
📘 Problem: Given an array of objects representing products, 
find and return all duplicate products based on the "sku" key.

const products = [
  { id: 1, name: "Laptop", sku: "ABC123" },
  { id: 2, name: "Mouse", sku: "XYZ789" },
  { id: 3, name: "Keyboard", sku: "ABC123" },
  { id: 4, name: "Monitor", sku: "LMN456" },
  { id: 5, name: "Mousepad", sku: "XYZ789" },
];

✅ Your Task:
- Identify duplicate products based on the "sku" value.
- Return an array of only the duplicate entries (not the first occurrences).

📌 Hint:
- Use an object or Map to keep track of seen SKUs.
- Push only the second (or more) occurrences into the result array.

🔍 Expected Output:
[
  { id: 3, name: "Keyboard", sku: "ABC123" },
  { id: 5, name: "Mousepad", sku: "XYZ789" }
]
*/

// Your solution here 👇


const products = [
    { id: 1, name: "Laptop", sku: "ABC123" },
    { id: 2, name: "Mouse", sku: "XYZ789" },
    { id: 3, name: "Keyboard", sku: "ABC123" },
    { id: 4, name: "Monitor", sku: "LMN456" },
    { id: 5, name: "Mousepad", sku: "XYZ789" },
];


const findDuplicates = (products) => {
    let dup = [];
    let skuObj = {};
    for (const element of products) {
        if (skuObj[element.sku]) {
            dup.push(element)
        } else {
            skuObj[element.sku] = element;
        }
    }
    return dup
}

console.log(`findDuplicates`, findDuplicates(products));