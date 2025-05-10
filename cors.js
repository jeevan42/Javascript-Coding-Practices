// cors.js

/**
 * CORS Configuration Example with Full Explanations
 * --------------------------------------------------
 * This file sets up a complete CORS configuration using the 'cors' middleware
 * for an Express.js app. It also includes an example server and usage.
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

/**
 * 🔧 CORS Options
 * --------------
 * Configure how the server responds to cross-origin requests.
 */
const corsOptions = {
  // 🌐 Allow requests from this origin (frontend)
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',

  // ✅ Allowed HTTP methods
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],

  // 📨 Allowed headers in requests from the client
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],

  // 📤 Headers that can be exposed to the client
  exposedHeaders: ['Content-Length', 'X-Kuma-Revision'],

  // 🍪 Enable cookies and credentials
  credentials: true,

  // 🕓 Cache preflight responses for 24 hours (in seconds)
  maxAge: 86400,

  // 🧪 Whether to pass preflight to next handler
  preflightContinue: false,

  // ✅ Response status for successful OPTIONS requests
  optionsSuccessStatus: 200,
};

// 🔄 Apply the CORS middleware globally
app.use(cors(corsOptions));

/**
 * 📦 Sample Routes
 */
app.get('/', (req, res) => {
  res.json({ message: 'CORS Configured Successfully 🎉' });
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/**
 * 📝 Notes:
 * - Use `credentials: true` if your frontend needs to send cookies or auth headers.
 * - Always match `origin` with your frontend app URL.
 */
