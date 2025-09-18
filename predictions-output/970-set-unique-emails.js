// Unique Emails
// Problem: Store only unique emails.
// Solution:
const emails = new Set(["a@test.com"]);
["a@test.com","b@test.com"].forEach(e => emails.add(e));
console.log(emails);
// Conclusion: Sets enforce unique email collection.