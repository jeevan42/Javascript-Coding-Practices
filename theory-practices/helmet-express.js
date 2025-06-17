/**
 * 🧰 HELMET in Express.js — Middleware for Secure Headers
 *
 * Helmet helps secure your Express apps by setting various HTTP headers.
 * It's a quick win for improving web app security.
 *
 * 🔐 Use it to prevent:
 *   - XSS attacks
 *   - Clickjacking
 *   - Content sniffing
 *   - Insecure CSP violations
 */

// ===================================================================
// ✅ Installation:
npm install helmet

// ===================================================================
// ✅ Basic Usage:
import express from "express";
import helmet from "helmet";

const app = express();
app.use(helmet()); // Enables all 15+ security headers by default

// ===================================================================
// 🛠️ Optional: Customizing headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trusted.cdn.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
    },
  })
);

// ===================================================================
// 🚀 Headers added by Helmet:
// - Content-Security-Policy
// - X-Content-Type-Options
// - X-DNS-Prefetch-Control
// - X-Frame-Options
// - X-Permitted-Cross-Domain-Policies
// - Strict-Transport-Security
// - X-XSS-Protection (deprecated, but still supported)

/**
 * ⛑️ Example of protection:
 * X-Frame-Options: DENY
 *   => Prevents your site from being embedded in iframes (Clickjacking)
 *
 * X-Content-Type-Options: nosniff
 *   => Prevents browser from trying to "guess" content types
 */

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * Helmet = 1 line security boost.
 *
 * Use it in every Express app by default.
 * Combine it with CSP + proper cookie setup for best results.
 */
