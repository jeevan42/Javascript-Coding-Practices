// 09-error-handling.js
/**
 * 📘 PROBLEM:
 * Demonstrate proper error handling in an Express API.
 *
 * ✅ CONCEPT: Try-Catch, Centralized Error Middleware
 * 🛠️ WHY:
 * - Prevents server from crashing on runtime errors.
 * - Provides clean, consistent API responses for failures.
 * - Reduces code repetition in routes.
 */

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect DB
connectDB();

/**
 * 👉 Utility: Async handler wrapper
 * Wrap async functions to automatically pass errors to middleware
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/**
 * 👉 Route: Get user by ID with error handling
 */
app.get(
  "/users/:id",
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  })
);

/**
 * 👉 Route: Force an internal error for testing
 */
app.get(
  "/cause-error",
  asyncHandler(async (req, res) => {
    throw new Error("This is a test error");
  })
);

/**
 * 👉 Central Error Middleware (must come after all routes)
 */
app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err.message);

  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
