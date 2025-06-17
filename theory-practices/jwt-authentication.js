/**
 * 🔐 JWT (JSON Web Token) — Stateless Authentication
 *
 * JWTs are digitally signed tokens used to authenticate users without storing session state on the server.
 * They are commonly used in modern APIs, SPAs, and mobile apps.
 */

// ===================================================================
// 🧾 Structure: header.payload.signature
// ===================================================================

/**
 * Example:
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
 * eyJ1c2VySWQiOiIxMjM0NSIsInJvbGUiOiJ1c2VyIn0.
 * sHFsD8ssFwA8vW34lmZBVaEk8B8wefZJxzk5gPYrSkE
 */

// ===================================================================
// ✅ How It Works:
// ===================================================================

/**
 * 1. User logs in → server generates JWT using user info
 * 2. Client stores the JWT (usually in localStorage or cookie)
 * 3. Client sends JWT with every request: `Authorization: Bearer <token>`
 * 4. Server verifies token’s signature & extracts payload to authenticate
 */

// ===================================================================
// 🔐 Example Using jsonwebtoken Library
// ===================================================================

import jwt from "jsonwebtoken";

const payload = { userId: "12345" };
const token = jwt.sign(payload, "my-secret-key", { expiresIn: "1h" });

const decoded = jwt.verify(token, "my-secret-key"); // returns original payload

// ===================================================================
// ⚠️ DO NOT store sensitive data in payload (it’s just Base64, not encrypted)
// ===================================================================

// ===================================================================
// ✅ Summary:
// ===================================================================

/**
 * - Stateless authentication
 * - Signed using secret or private key
 * - Useful for APIs, SPAs
 * - Avoid storing in localStorage if you’re worried about XSS!
 */
