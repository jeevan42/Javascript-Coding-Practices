const matches = 'test1test2'.matchAll(/\d/g);
console.log([...matches]); // [['1'], ['2']]
