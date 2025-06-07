/*
📘 Problem 1: Group Users by Role

Given an array of user objects, group them by their "role" property.

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "David", role: "user" },
  { id: 5, name: "Eve", role: "moderator" },
];

✅ Your Task:
- Group all users by their role.
- Return an object where the keys are role names and the values are arrays of user objects.

🔍 Expected Output:
{
  admin: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 3, name: "Charlie", role: "admin" }
  ],
  user: [
    { id: 2, name: "Bob", role: "user" },
    { id: 4, name: "David", role: "user" }
  ],
  moderator: [
    { id: 5, name: "Eve", role: "moderator" }
  ]
}
*/

// Your solution for Problem 1 here 👇

const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "admin" },
    { id: 4, name: "David", role: "user" },
    { id: 5, name: "Eve", role: "moderator" },
];



const groupByRole01 = (users) => {
    let groupedObj = {};
    for (const user of users) {
        if (groupedObj[user.role]) {
            groupedObj[user.role] = [...groupedObj[user.role], user];
        } else {
            groupedObj[user.role] = [user]
        }
    }
    return groupedObj;
};


const groupByRole02 = (users) => {
    let groupedObj = {};
    for (const user of users) {
        groupedObj[user.role] = [...(groupedObj[user.role] || []), user];
    }
    return groupedObj;
};


console.log(`groupByRole01`, groupByRole01(users));
console.log(`groupByRole02`, groupByRole02(users));
