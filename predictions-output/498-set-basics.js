const set = new Set();
set.add(1);
set.add(2);
set.add(1); // duplicate ignored
console.log([...set]); // [1, 2]
