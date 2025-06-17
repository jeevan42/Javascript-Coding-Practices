/**
 * 🚦 Rate Limiting in Express
 *
 * Rate limiting helps protect your server from abuse or DDoS by limiting
 * how many requests a user can make to your API in a given timeframe.
 *
 * ✅ Common Use Cases:
 * - Prevent brute force login attempts
 * - Limit API abuse (free plans, etc.)
 * - Protect critical routes (e.g., /auth, /payment)
 */

// ==========================
// 📦 Step 1: Install Middleware
// ==========================
// npm install express-rate-limit

import rateLimit from "express-rate-limit";

// ==========================
// 🛡️ Step 2: Create Limiter
// ==========================
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false,  // Disable `X-RateLimit-*` headers
  message: {
    success: false,
    message: "Too many requests, please try again after 15 minutes.",
  },
});

// ==========================
// 🧪 Step 3: Apply Limiter in App
// ==========================
import express from "express";
const app = express();

// Global rate limit (all routes)
// app.use(apiLimiter);

// Or apply only to specific route group
app.use("/api/", apiLimiter);

// Example route
app.get("/api/data", (req, res) => {
  res.json({ success: true, message: "You accessed /api/data" });
});

// ==========================
// 🚀 Run the Server
// ==========================
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

// ==========================
// 🧠 Summary
// ==========================
/**
 * - `express-rate-limit` is the simplest way to add basic rate limiting.
 * - Set different limits per route group (e.g., stricter for `/auth`).
 * - Rate limiting headers help clients stay within limits.
 * - Consider using Redis-backed stores for distributed rate-limiting.
 */
