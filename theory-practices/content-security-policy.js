/**
 * 🛡️ CONTENT SECURITY POLICY (CSP) — Defense Against XSS
 *
 * CSP is a browser security feature that tells the browser:
 * "Only allow these specific sources to load scripts, images, styles, etc."
 *
 * ✅ It helps you BLOCK malicious inline scripts or unsafe CDN files.
 */

// ===================================================================
// ✅ How to Add CSP via Express (helmet):
import helmet from "helmet";

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
    },
  })
);

// ===================================================================
// ⚠️ Without CSP:
// <script>alert(document.cookie)</script> → ✅ executes
//
// ✅ With CSP:
// That script is BLOCKED by browser before it runs.

// ===================================================================
// 🔍 Directives Explained:
defaultSrc    => fallback source
scriptSrc     => where scripts can load from
styleSrc      => CSS files or inline styles
imgSrc        => image domains
fontSrc       => font file domains
objectSrc     => block plugins like Flash
frameAncestors=> prevent embedding in iframe

// ===================================================================
// 🧪 Try "report-only" mode:
app.use(
  helmet.contentSecurityPolicy({
    reportOnly: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  })
);
// Violations are logged in console, but NOT blocked yet.

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * ✅ CSP helps protect against:
 *   - XSS
 *   - Untrusted script/CDN loads
 *   - Data injection via scripts
 *
 * Combine with:
 *   - Input sanitization
 *   - HttpOnly cookies
 *   - Helmet middleware
 *
 * 💡 Final Tip: Test your policy in report-only mode before enforcing!
 */
