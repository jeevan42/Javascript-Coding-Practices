// 02-post-user.js
/**
 * 📘 PROBLEM:
 * Create a new user in the MongoDB database.
 *
 * ✅ METHOD: POST
 * 🛠️ USE CASE:
 * - POST is used when you want to **create a new resource**.
 * - It's **not idempotent**: multiple same requests can create duplicates.
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
 * 👉 Route: Create a new user
 * URL: POST /users
 * Body: { name, email, password }
 */
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  // Basic input validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, and password",
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});