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
    let duplicates = []; // Will store duplicate products
    let seenSkus = {};  // Used to track already seen SKUs
    for (const product of products) {
        // If we've seen this SKU before, it's a duplicate
        if (seenSkus[product.sku]) {
            duplicates.push(product)
        } else {
            // Mark this SKU as seen
            seenSkus[product.sku] = true;
        }
    }
    return duplicates
}

console.log(`findDuplicates`, findDuplicates(products));


/*
📌 Explanation:
- We loop through each product.
- If the SKU has already been stored in our `seenSkus` map, we push it into `duplicates`.
- This way, only second (or further) occurrences are captured.
*/