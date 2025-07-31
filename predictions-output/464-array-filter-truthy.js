const mixed = [0, 1, '', 'hi', null, 42];
console.log(mixed.filter(Boolean)); // [1, 'hi', 42]