const truncateString = (str, num) => {
  return str.length > num ? str.slice(0, num) + "..." : str;
};

console.log(truncateString("Hello World", 5)); // "Hello..."
