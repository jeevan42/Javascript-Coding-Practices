/**
 * 🔢 OTP / AUTHENTICATION CODE — Secure Temporary Verification
 *
 * A one-time password or authentication code is a temporary number sent to a user
 * for the purpose of verifying identity. Commonly used in 2FA, login, signup.
 */

// ===================================================================
// 📦 Example Use Cases
// ===================================================================

/**
 * - Email/phone number verification
 * - Two-factor authentication
 * - Reset password flows
 */

// ===================================================================
// 🔐 Example Code:
function generateOTP(length = 6) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}

const otp = generateOTP(); // Example: 342187
console.log("Send this OTP via SMS or Email:", otp);

// ===================================================================
// 🧠 Best Practices
// ===================================================================

/**
 * ✅ Store OTP temporarily in DB or cache (like Redis)
 * ✅ Associate with user and expiry (e.g., valid for 5 mins)
 * ✅ Invalidate OTP after usage
 */

// ===================================================================
// ✅ Summary
// ===================================================================

/**
 * - Short-lived (usually 4–8 digits)
 * - Used for login, signup, verification flows
 * - Sent via SMS, email, authenticator apps
 */
