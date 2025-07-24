Promise.race([
  new Promise(res => setTimeout(() => res('A'), 100)),
  new Promise(res => setTimeout(() => res('B'), 50))
]).then(console.log); // B
