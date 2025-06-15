// 05-delete-user.js
/**
 * 📘 PROBLEM:
 * Delete a user by their ID from the MongoDB database.
 *
 * ✅ METHOD: DELETE
 * 🛠️ USE CASE:
 * - DELETE is used when you want to **remove a resource**.
 * - It is idempotent: calling DELETE multiple times should have the same effect (resource is already deleted).
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
 * 👉 Route: Delete a user by ID
 * URL: DELETE /users/:id
 */
app.delete("/users/:id", async (req, res) => {
  try {
    // Find user by ID and delete
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found, unable to delete",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});