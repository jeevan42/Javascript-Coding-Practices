/**
 * 📘 PROBLEM:
 * Update an existing user's data by ID.
 *
 * ✅ METHOD: PUT
 * 🔁 USE CASE:
 * - PUT is used to **update** a resource.
 * - It’s **idempotent**: same input = same result.
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
 * 👉 Route: Update user by ID
 * URL: PUT /users/:id
 * Body: { name, email, password }
 */
app.put("/users/:id", async (req, res) => {
  const { name, email, password } = req.body;

  // Optional: Validate at least one field is present
  if (!name && !email && !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide at least one field to update",
    });
  }

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid User ID" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});