/*
📘 Problem 26: Chunk Object by Keys

✅ Description:
Split an object into an array of smaller objects by number of keys.

📌 Concept:
Use slice and reduce over key batches.
*/

const chunkObject = (obj, size) => {
  const keys = Object.keys(obj);
  const chunks = [];
  for (let i = 0; i < keys.length; i += size) {
    const chunk = keys.slice(i, i + size).reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
    chunks.push(chunk);
  }
  return chunks;
};

console.log(chunkObject({ a: 1, b: 2, c: 3, d: 4 }, 2));
