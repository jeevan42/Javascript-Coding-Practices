/*
📘 Problem: Clone an object without reference.

const original = { a: 1, b: { c: 2 } };

✅ Solution 1: Shallow clone
const clone1 = { ...original };

✅ Solution 2: Deep clone (structuredClone - modern)
const clone2 = structuredClone(original);

✅ Solution 3: Deep clone (JSON method)
const clone3 = JSON.parse(JSON.stringify(original));

📌 Explanation:
- Shallow clone copies only top-level.
- Deep clone copies nested objects too.
- structuredClone is preferred for performance & reliability.
*/
