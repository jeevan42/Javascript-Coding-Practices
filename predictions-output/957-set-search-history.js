// Search History
// Problem: Store unique search terms.
// Solution:
const history = new Set();
function search(term) {
  history.add(term.toLowerCase());
}
search("JavaScript"); search("javascript");
console.log(history);
// Conclusion: Case-insensitive unique storage.
