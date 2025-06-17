/**
 * 🔐 Securing Client-Side Data in Web Applications
 *
 * 🧠 Problem:
 * If malicious JS runs in your app (via XSS), it can easily access:
 *  - localStorage
 *  - sessionStorage
 *  - document.cookie (non-HttpOnly)
 *
 * 🚨 This can lead to stolen auth tokens, hijacked sessions, and major data leaks.
 *
 * ✅ Goal: Prevent unauthorized access to client-stored data (especially auth tokens).
 */

// ===================================================================
// 1️⃣ BAD PRACTICE: Storing tokens in localStorage (easily stolen)
// ===================================================================

localStorage.setItem("token", "JWT_abc123");
// ❌ This token can be stolen if XSS occurs

// ===================================================================
// 2️⃣ BEST PRACTICE: Use HttpOnly Secure Cookies for auth tokens
// ===================================================================
/**
 * - Set from the server only.
 * - Not accessible via JS (document.cookie).
 * - Auto-sent with every request to the server.
 */

// In Express.js backend (example):
import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy validation
  if (email === "user@example.com" && password === "1234") {
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    res.json({ message: "Login successful ✅" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// To protect routes:
function isAuthenticated(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: "Token expired or invalid" });
  }
}

app.get("/profile", isAuthenticated, (req, res) => {
  res.json({ user: req.user });
});

// ===================================================================
// 3️⃣ FRONTEND: No need to store token at all
// ===================================================================

/**
 * - Use fetch or axios.
 * - The browser sends the cookie automatically with requests.
 * - No need to read/write token manually.
 */

fetch("/profile", {
  method: "GET",
  credentials: "include", // IMPORTANT: send cookies with request
})
  .then(res => res.json())
  .then(data => console.log(data));

// ===================================================================
// 4️⃣ BONUS: Add Content Security Policy (CSP) headers
// ===================================================================

/**
 * Prevents inline script injections.
 * Add this on your server headers:
 *
 * Content-Security-Policy: default-src 'self'; script-src 'self'
 */

// ===================================================================
// ✅ Final Summary
// ===================================================================

/**
 * | Technique                     | Safe from XSS? | Can JS read it? | Persistent? |
 * |------------------------------|----------------|-----------------|-------------|
 * | localStorage                 | ❌             | ✅              | ✅          |
 * | sessionStorage               | ❌             | ✅              | ❌          |
 * | Cookies (no HttpOnly)        | ❌             | ✅              | ✅          |
 * | Cookies (HttpOnly + Secure)  | ✅             | ❌              | ✅          |
 *
 * 🚀 Recommendations:
 * - Use HttpOnly cookies for JWT tokens.
 * - Never store tokens in localStorage/sessionStorage.
 * - Always sanitize user input (to prevent XSS).
 * - Add CSP headers.
 */
