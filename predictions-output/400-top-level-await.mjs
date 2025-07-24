// Save as .mjs file to use top-level await
const data = await Promise.resolve('Top-level await!');
console.log(data);
