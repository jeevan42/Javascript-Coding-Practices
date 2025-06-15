# 🧠 CRUD Practices with Express & MongoDB

This project demonstrates **CRUD operations**, **HTTP methods**, **error handling**, and **input validation** using **Node.js**, **Express**, and **MongoDB**.

The goal is to understand how each HTTP method (GET, POST, PUT, PATCH, DELETE) works and when to use them. Each file in this project is designed to isolate and demonstrate one concept at a time.

---

## 📁 Folder Structure

<pre>
  
crud-practices/
│
├── models/
│ └── User.model.js # Mongoose schema for the User model
│
├── .env.example # Example .env file for MongoDB URI
├── db.js # MongoDB connection file
├── 01-get-users.js # Demonstrates GET request to fetch all users
├── 02-post-user.js # Demonstrates POST request to create a user
├── 03-put-user.js # Demonstrates PUT request to replace a user
├── 04-patch-user.js # Demonstrates PATCH request to partially update
├── 05-delete-user.js # Demonstrates DELETE request to delete a user
├── 06-get-vs-post.js # Compares GET and POST usage with examples
├── 07-put-vs-patch.js # Compares PUT and PATCH with use cases
├── 08-crud-flow.js # Demonstrates complete CRUD cycle in one file
├── 09-error-handling.js # Error handling using middleware and async wrapper
└── 10-validation.js # Input validation using express-validator

</pre>

---
## 🛠 Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **express-validator**
- **dotenv**

---

## 📄 File Breakdown

### `User.model.js`
> Defines the User schema with fields: `name`, `email`, and `password`.

---

### `01-get-users.js`
- Demonstrates the `GET` method.
- Fetch all users from MongoDB.
- Explains when to use GET and what response to expect.

---

### `02-post-user.js`
- Demonstrates the `POST` method.
- Used to create a new user in the DB.
- Explains request body structure and status codes.

---

### `03-put-user.js`
- Demonstrates the `PUT` method.
- Replaces the entire user object by ID.
- Covers use cases when full replacement is needed.

---

### `04-patch-user.js`
- Demonstrates the `PATCH` method.
- Partially updates specific fields of a user.
- Compares PATCH vs PUT usage.

---

### `05-delete-user.js`
- Demonstrates the `DELETE` method.
- Deletes user by ID and handles 404s for non-existent users.

---

### `06-get-vs-post.js`
- Educational comparison of GET vs POST:
  - When to use which method.
  - How query params and body work.
  - Side effects and security considerations.

---

### `07-put-vs-patch.js`
- Deep dive into differences between PUT and PATCH:
  - PUT = full replace
  - PATCH = partial update
  - Practical examples and response structures.

---

### `08-crud-flow.js`
- Demonstrates the **entire CRUD flow**:
  - POST → GET → PUT → PATCH → DELETE
- Useful to understand how all methods fit together.

---

### `09-error-handling.js`
- Centralized error handling using middleware.
- Uses a custom `asyncHandler()` wrapper.
- Proper status codes and error messages shown.

---

### `10-validation.js`
- Adds **input validation** using `express-validator`.
- Checks for required fields, email format, password length.
- Prevents invalid data from reaching the DB.

---

## 🔧 Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file using `.env.example`
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=3000
   ```
4. Run any file with
   ```
   node 01-get-users.js
   ```

---
