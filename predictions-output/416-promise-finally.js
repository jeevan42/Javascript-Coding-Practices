Promise.resolve('done')
  .finally(() => console.log('clean up'))
  .then(console.log); // 'clean up' then 'done'
