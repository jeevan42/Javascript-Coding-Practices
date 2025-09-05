// Concept: Unique Emails
// Problem: Normalize emails and count unique ones.
// Solution:
function uniqueEmails(emails) {
  return new Set(emails.map(e => e.split("@")[0].replace(/\./g,"").split("+")[0] + "@" + e.split("@")[1])).size;
}
console.log(uniqueEmails(["test.email+alex@leetcode.com","test.e.mail@leetcode.com"])); // 1
