try {
  JSON.parse('{ invalid }');
} catch (e) {
  console.log('Invalid JSON');
}