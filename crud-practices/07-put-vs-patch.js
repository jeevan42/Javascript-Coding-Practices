// 07-put-vs-patch.js
/**
 * 📘 PROBLEM:
 * Understand the difference between PUT and PATCH methods and when to use them.
 *
 * ✅ METHOD: PUT vs PATCH
 * 🛠️ USE CASE:
 * - **PUT**: Used for **complete replacement** of a resource.
 * - **PATCH**: Used for **partial update** of a resource (only modify the fields you provide).
 * 
 * PUT is **idempotent**, PATCH is **not necessarily idempotent**.
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
 * 👉 PUT method:
 * PUT is used to **replace** the entire resource.
 * It will **overwrite** the current data with the new data you send.
 * PUT is idempotent: Multiple same PUT requests will have the same result.
 */
app.put("/users/:id", async (req, res) => {
  const { name, email, password } = req.body;

  // Input validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, and password",
    });
  }

  try {
    // Update user data completely (replace user)
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully (PUT)",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/**
 * 👉 PATCH method:
 * PATCH is used to **update only specific fields** of a resource.
 * It is not necessarily idempotent: Multiple same PATCH requests might have different results.
 */
app.patch("/users/:id", async (req, res) => {
  const updates = req.body; // Partial data to update

  try {
    // Update only the fields that are provided (partial update)
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully (PATCH)",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});