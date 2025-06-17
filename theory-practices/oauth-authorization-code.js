/**
 * 🔐 OAUTH 2.0 — Authorization Code Flow
 *
 * A secure way to grant access to third-party apps without sharing passwords.
 * Common in “Login with Google / GitHub” systems.
 */

// ===================================================================
// 🔁 OAuth Authorization Code Flow (High-Level)
// ===================================================================

/**
 * 1. User clicks "Login with Google"
 * 2. Google redirects to a consent page
 * 3. If user accepts → Google redirects back with an "authorization code"
 * 4. App sends that code to Google backend to get a real "access token"
 * 5. App uses access token to access user's profile/email securely
 */

// ===================================================================
// 📦 Why This Flow?
// ===================================================================

/**
 * - Keeps access token secret (only backend sees it)
 * - Protects against token leakage via frontend
 * - Good for server-side apps & SPAs using PKCE
 */

// ===================================================================
// 🛡️ Example Real Providers:
// ===================================================================

/**
 * Google, Facebook, GitHub, LinkedIn, etc.
 */

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * - Authorization Code = temporary
 * - Exchanged for access token
 * - Secure, especially when using with PKCE
 * - Common in modern OAuth implementations
 */
