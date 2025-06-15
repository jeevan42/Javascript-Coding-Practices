// 08-crud-flow.js
/**
 * 📘 PROBLEM:
 * Demonstrate the full CRUD cycle (Create, Read, Update, Delete) with one user resource.
 *
 * ✅ METHODS: GET, POST, PUT, PATCH, DELETE
 * 🛠️ USE CASE:
 * - Perform all CRUD operations (Create, Read, Update, Delete) on a user.
 * - Example of how each method is used in a real-world API flow.
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
 * 👉 Route 1: Create a new user (POST)
 * URL: POST /users
 */
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, and password",
    });
  }

  try {
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

/**
 * 👉 Route 2: Get all users (GET)
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
 * 👉 Route 3: Update user by ID (PUT)
 * URL: PUT /users/:id
 */
app.put("/users/:id", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, and password",
    });
  }

  try {
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
 * 👉 Route 4: Partially update user by ID (PATCH)
 * URL: PATCH /users/:id
 */
app.patch("/users/:id", async (req, res) => {
  const updates = req.body;

  try {
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

/**
 * 👉 Route 5: Delete user by ID (DELETE)
 * URL: DELETE /users/:id
 */
app.delete("/users/:id", async (req, res) => {
  try {
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