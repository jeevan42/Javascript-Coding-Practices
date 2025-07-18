// 334-this-in-arrow.js 

const obj2 = { 
count: 0, 
inc: () => { 
console.log(this.count); // undefined or window.count
 } 
}; 
obj2.inc();
