const getFileExtension = (filename) => {
  return filename.split('.').pop();
};

console.log(getFileExtension("example.js")); // "js"
