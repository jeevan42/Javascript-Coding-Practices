// 06-get-vs-post.js
/**
 * 📘 PROBLEM:
 * Understand the difference between GET and POST methods and their usage.
 *
 * ✅ METHOD: GET vs POST
 * 🛠️ USE CASE:
 * - **GET**: Fetch data without modifying it. It should be **idempotent** and **safe**.
 * - **POST**: Create or send data to the server, often used for creating new resources. It is **not idempotent**.
 */

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

/**
 * 👉 GET method:
 * Use GET to **retrieve data** from the server without changing any data.
 * Safe and idempotent (repeated requests won't change data).
 */
app.get("/get-example", (req, res) => {
  // Example: Getting all users from DB
  res.status(200).json({
    success: true,
    message: "GET request: Data fetched successfully (no change)",
  });
});

/**
 * 👉 POST method:
 * Use POST to **send data** to the server to create a new resource.
 * NOT safe, and NOT idempotent (repeated requests will create duplicates).
 */
app.post("/post-example", async (req, res) => {
  const { name, email, password } = req.body;

  // Basic input validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, and password",
    });
  }

  try {
    // Create a new user with POST
    const newUser = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: "POST request: New user created",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});