/**
 * 🧩 Understanding Multiple Middleware Usage in Express.js
 *
 * ✅ Middlewares are functions that run before reaching the final route handler.
 * ✅ We can use:
 *   - Global middlewares (apply to all routes)
 *   - Route-specific middlewares (1 or more per route)
 *   - Grouped middlewares using Express Routers
 */

import express from "express";
const app = express();

// 🔹 Global Middleware
app.use((req, res, next) => {
  console.log("🌐 Global Middleware: Logs every request");
  next();
});

// 🔹 Custom Middleware 1: Auth Check (Dummy)
const isAuthenticated = (req, res, next) => {
  console.log("🔒 Middleware: Checking if user is authenticated...");
  // You can check req.headers or tokens here
  next(); // Let it pass for now
};

// 🔹 Custom Middleware 2: Logging
const logger = (req, res, next) => {
  console.log(`📦 ${req.method} - ${req.url}`);
  next();
};

// 🔹 Route with multiple middlewares (chained)
app.get(
  "/dashboard",
  [isAuthenticated, logger],
  (req, res) => {
    res.send("✅ Welcome to Dashboard");
  }
);

// 🔹 Another route with single middleware
app.get("/profile", isAuthenticated, (req, res) => {
  res.send("👤 User Profile");
});

// 🔹 Group routes using Router
const adminRouter = express.Router();

// Apply middlewares only to admin routes
adminRouter.use(isAuthenticated, logger);

adminRouter.get("/users", (req, res) => {
  res.send("🔧 Admin Users");
});

adminRouter.get("/settings", (req, res) => {
  res.send("⚙️ Admin Settings");
});

// Mount the admin router at /admin
app.use("/admin", adminRouter);

// 🟢 Server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
