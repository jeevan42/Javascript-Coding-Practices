/**
 * middleware.js
 *
 * Middleware in Express.js
 *
 * Middleware functions are functions that have access to the request object (req),
 * the response object (res), and the next middleware function in the application's
 * request-response cycle.
 *
 * They can:
 * - Execute any code.
 * - Make changes to the request and response objects.
 * - End the request-response cycle.
 * - Call the next middleware in the stack.
 *
 * Middleware is used for logging, authentication, error handling, parsing request bodies, etc.
 */

// Example 1: Simple logging middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url} - Time: ${new Date().toISOString()}`);
  next(); // Pass control to next middleware
};

// Example 2: Authentication middleware (mock)
const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Imagine we verify token here
  if (token === "valid-token") {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

// Example 3: Error handling middleware
const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
};

// ===== Usage in Express =====

// const express = require('express');
// const app = express();

// // Use logger for all routes
// app.use(loggerMiddleware);

// // Protect /dashboard route
// app.get('/dashboard', authMiddleware, (req, res) => {
//   res.send('Welcome to dashboard');
// });

// // Global error handler
// app.use(errorMiddleware);

module.exports = {
  loggerMiddleware,
  authMiddleware,
  errorMiddleware,
};
