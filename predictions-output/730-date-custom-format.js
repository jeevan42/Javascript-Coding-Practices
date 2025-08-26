// Custom date format
function formatDate(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
console.log(formatDate(new Date()));
