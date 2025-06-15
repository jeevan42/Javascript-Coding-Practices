// 10-validation.js
/**
 * 📘 PROBLEM:
 * Ensure that user inputs are valid before saving to DB.
 *
 * ✅ CONCEPT: Validation using express-validator
 * 🛠️ WHY:
 * - Prevents invalid/malicious data from entering the database.
 * - Provides better error messages to users.
 */

import express from "express";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import connectDB from "./db.js";
import User from "./models/User.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect DB
connectDB();

/**
 * 👉 Route: Create new user with validation
 * ✅ Using express-validator middleware to check input
 */
app.post(
  "/users",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((err) => err.msg),
      });
    }

    const { name, email, password } = req.body;

    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }

      const newUser = await User.create({ name, email, password });

      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server Error" });
    }
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
