/**
 * 📘 PROBLEM:
 * Partially update a user's data.
 *
 * ✅ METHOD: PATCH
 * 🔁 USE CASE:
 * - PATCH is for **partial updates**.
 * - It’s **not always idempotent**.
 */

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

/**
 * 👉 Route: PATCH /users/:id
 * Body: any subset of { name, email, password }
 */
app.patch("/users/:id", async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid update or user ID" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});