const str = '{"a":1,}';
try {
  JSON.parse(str); // Error: Unexpected token }
} catch (e) {
  console.log('Invalid JSON');
}
