try {
  notHoisted(); // Error
} catch (e) {
  console.log('Error:', e.message);
}
const notHoisted = function () {
  console.log('No hoisting here');
};