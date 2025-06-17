/**
 * 🔐 CLIENT-SIDE SECURITY — Key Concepts for Web Devs
 *
 * 🧠 Problem:
 * Anything stored/accessed in the browser (localStorage, cookies, JS variables)
 * can be stolen if a malicious script runs — especially via XSS.
 *
 * ✅ Goal:
 * Prevent attackers from accessing or hijacking user data stored in the browser.
 */

// ===================================================================
// 🔓 VULNERABLE CLIENT-SIDE STORAGE
// ===================================================================

/**
 * localStorage:
 *   - Fully readable via JS (localStorage.getItem)
 *   - Persistent (doesn’t expire)
 *   - Shared across tabs
 *   ❌ Vulnerable to XSS
 *
 * sessionStorage:
 *   - Tab-specific, auto-clears on close
 *   - Still readable via JS
 *   ❌ Vulnerable to XSS
 *
 * Cookies:
 *   - ✅ Can be made secure using `HttpOnly`, `Secure`, `SameSite`
 *   - ❌ Non-HttpOnly cookies are readable via `document.cookie`
 */

// ===================================================================
// 🛑 BIGGEST RISK: XSS (Cross-Site Scripting)
// ===================================================================

/**
 * If any input/output is not properly sanitized, attackers can inject:
 *   <script>stealCookie()</script>
 *
 * If this executes:
 *   - They can access `localStorage`, `sessionStorage`, and cookies.
 *   - They can impersonate users, steal tokens, or inject fake UIs.
 */

// ===================================================================
// ✅ SECURE PRACTICES FOR CLIENT-SIDE DATA
// ===================================================================

/**
 * ✅ Use HttpOnly Cookies for storing JWT/auth tokens.
 * ✅ Never store sensitive data in localStorage or sessionStorage.
 * ✅ Sanitize all user input (e.g., using DOMPurify or back-end validation).
 * ✅ Use a strong Content Security Policy (CSP) to block injected scripts.
 * ✅ Add Helmet middleware in Express to set security headers.
 */

// ===================================================================
// 🔐 Cookie Example (Secure Setup)
res.cookie("token", jwtToken, {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
  maxAge: 60 * 60 * 1000,
});

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * | Technique             | XSS Safe? | Can JS read? | Expiry?    |
 * |----------------------|-----------|--------------|------------|
 * | localStorage         | ❌        | ✅           | Manual     |
 * | sessionStorage       | ❌        | ✅           | Tab Close  |
 * | Cookies (HttpOnly)   | ✅        | ❌           | Configurable |
 *
 * 🔒 Best Defense = HttpOnly + CSP + Helmet + Sanitization
 */
