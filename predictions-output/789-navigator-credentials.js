// navigator.credentials
// Problem: Handle credential management (login autofill).
// Solution
navigator.credentials.get({ password: true }).then(c => console.log(c));
// Conclusion: navigator.credentials is part of Credential Management API.
