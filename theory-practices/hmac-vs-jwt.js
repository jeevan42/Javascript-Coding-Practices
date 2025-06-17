/**
 * 🔐 HMAC vs JWT — Understanding Message Authentication
 *
 * HMAC (Hash-based Message Authentication Code) is a method to verify data integrity & authenticity.
 * JWT uses HMAC (or RSA) internally to sign tokens.
 */

// ===================================================================
// ✍️ What is HMAC?
// ===================================================================

/**
 * A cryptographic method using:
 *   hash(data + secret)
 *
 * It ensures:
 * ✅ Data hasn’t been tampered
 * ✅ Sender is authentic
 */

// ===================================================================
// 🔄 How JWT Uses HMAC (HS256)
import crypto from "crypto";

const secret = "my-secret";
const payload = "userId=123";

const hmac = crypto
  .createHmac("sha256", secret)
  .update(payload)
  .digest("hex");

console.log("HMAC Signature:", hmac);

// ===================================================================
// 📌 Use Cases for Raw HMAC
// ===================================================================

/**
 * - API request verification (e.g., Stripe webhook signatures)
 * - Securing internal services
 * - JWT token signature creation
 */

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * - HMAC is a method (not a token format)
 * - JWT tokens often use HMAC for signature (e.g., HS256)
 * - Helps verify data is from a trusted source
 */
