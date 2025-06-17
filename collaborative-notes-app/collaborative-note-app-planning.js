/**
 * 📝 COLLABORATIVE NOTE APP – ENGINEERING PLAN & THEORY
 *
 * Goal:
 *  - Real-time note collaboration (like Google Docs Lite)
 *  - Multiple users can work on the same note simultaneously
 *  - Secure, scalable, and clean backend-frontend interaction
 */

// ===================================================================
// ⚙️ TECH STACK
// ===================================================================
/**
 * Frontend: React.js or Next.js (SSR + SPA)
 * Backend: Node.js + Express
 * Database: MongoDB (via Mongoose)
 * Real-time: Socket.IO (WebSocket abstraction)
 * Auth: JWT (optional: refresh token mechanism)
 * Hosting: Vercel (frontend) + Fly.io/Render (backend) + MongoDB Atlas
 */

// ===================================================================
// 🧱 DATA MODELS (MongoDB/Mongoose)
// ===================================================================

// ✅ User
/**
 * {
 *   _id,
 *   name,
 *   email,
 *   passwordHash,
 *   notesSharedWith: [noteId],
 *   createdAt
 * }
 */

// ✅ Note
/**
 * {
 *   _id,
 *   title,
 *   content, // could be plain text, Markdown, or Quill Delta format
 *   owner: userId,
 *   collaborators: [userId],
 *   versionHistory: [
 *     { editedBy, timestamp, diff }
 *   ],
 *   createdAt,
 *   updatedAt
 * }
 */

// ✅ Comment (Optional)
/**
 * {
 *   _id,
 *   noteId,
 *   userId,
 *   content,
 *   timestamp
 * }
 */

// ✅ ActiveEditors (In-memory store like Redis)
/**
 * {
 *   noteId: [userId1, userId2, ...]
 * }
 */

// ===================================================================
// 📡 REST API STRUCTURE (Express.js)
// ===================================================================

/**
 * 🔐 AUTH
 * - POST   /api/auth/register
 * - POST   /api/auth/login
 * - GET    /api/auth/me
 *
 * 📄 NOTES
 * - GET    /api/notes/             → all accessible notes
 * - POST   /api/notes/             → create a new note
 * - GET    /api/notes/:id          → get single note
 * - PUT    /api/notes/:id          → update note
 * - DELETE /api/notes/:id          → delete note
 *
 * 👥 COLLABORATORS
 * - POST   /api/notes/:id/collaborators    → add/remove user
 * - GET    /api/notes/:id/collaborators    → list collaborators
 *
 * 💬 COMMENTS
 * - GET    /api/notes/:id/comments
 * - POST   /api/notes/:id/comments
 */

// ===================================================================
// 🧠 REAL-TIME (WebSocket Events via Socket.IO)
// ===================================================================

/**
 * Event: join-note         { noteId, userId }
 * Event: note-changed      { content, userId }
 * Event: user-typing       { userId }
 * Event: user-left         { userId }
 * Event: sync-content      { fullContent }
 * Event: note-save         { noteId, content }
 *
 * Each note has its own "room" using Socket.IO.
 * Users in the same room receive updates in real-time.
 */

// ===================================================================
// 🛡️ SECURITY
// ===================================================================
/**
 * ✅ Verify socket joins (auth middleware)
 * ✅ Sanitize inputs (HTML/JS injection prevention)
 * ✅ Rate limit API routes (express-rate-limit)
 * ✅ Protect JWTs in HTTPOnly cookies (secure cookie config)
 * ✅ Prevent cross-site scripting (CSP headers + Helmet)
 * ✅ Hash passwords with bcrypt (server-side)
 */

// ===================================================================
// 🧠 VERSION CONTROL STRATEGY
// ===================================================================
/**
 * Save diffs on major updates (use diff-match-patch)
 * or save full content periodically (autosave every X secs)
 * Use versionHistory[] in note schema
 * Optionally expose UI to view & restore previous versions
 */

// ===================================================================
// 🧠 OPTIONAL FEATURES
// ===================================================================
/**
 * 🔄 Autosave using debounce (500ms after last keystroke)
 * 🧠 Cursor sharing (Quill or Slate editors)
 * 🕵️‍♂️ View-only or edit modes for collaborators
 * 📴 Offline mode with IndexedDB and sync logic
 * 📚 Markdown or rich text editor integration (Quill.js, Tiptap)
 * 🔔 Notifications when someone joins your note
 */

// ===================================================================
// 🧩 ENGINEERING PATTERN SUMMARY
// ===================================================================
/**
 * 1. Setup Mongoose models for Note, User, Comments
 * 2. Create REST APIs for CRUD + sharing
 * 3. Enable real-time collaboration via WebSocket (Socket.IO)
 * 4. Use JWT for user sessions
 * 5. Implement client-side socket logic to emit and listen events
 * 6. Use state management (Zustand, Context API) for active note
 * 7. Add autosave and backup system
 * 8. Deploy frontend/backend separately
 */

// ===================================================================
// ✅ END SUMMARY
// ===================================================================
/**
 * This project is a real-world challenge with:
 * - REST + WebSocket hybrid architecture
 * - Auth + multi-user roles
 * - State management
 * - Real-time sync
 * 
 * Optional Next Steps:
 * - Implement presence indicators
 * - Real-time typing/collab with CRDT or OT (advanced)
 */
