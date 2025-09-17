// Unique Likes
// Problem: Prevent multiple likes from same user.
// Solution:
const likes = new Set();
function like(user) { likes.add(user); }
like("u1"); like("u1");
console.log(likes.size);
// Conclusion: Sets enforce unique likes.
