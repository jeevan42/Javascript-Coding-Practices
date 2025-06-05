/*
📘 Problem: Safely access deep object property

const user = {
  profile: {
    address: {
      city: "Mumbai"
    }
  }
};

✅ Solution:
const city = user?.profile?.address?.city || "Not found";

📌 Optional chaining (?.) prevents runtime error if intermediate property is undefined/null.
Useful in real-world APIs.
*/
