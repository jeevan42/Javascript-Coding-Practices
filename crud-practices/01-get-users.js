// 01-get-users.js
/**
 * 📘 PROBLEM:
 * Fetch all users or a single user by ID from the database.
 *
 * ✅ METHOD: GET
 * 🔍 USE CASE:
 * Use GET when you want to **retrieve data** without making any changes.
 * It should always be safe and idempotent (same result if called multiple times).
 */

import express from "express";
import connectDB from "./db.js";
import User from "./models/User.model.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

/**
 * 👉 Route 1: Get all users
 * URL: GET /users
 */
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/**
 * 👉 Route 2: Get user by ID
 * URL: GET /users/:id
 */
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid User ID" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});