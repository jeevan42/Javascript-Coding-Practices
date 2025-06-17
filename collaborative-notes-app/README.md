
# 📝 Collaborative Note-Taking App (Planning & Architecture)

A real-time collaborative note-taking web application (Google Docs Lite), where multiple users can edit a note simultaneously, share it, and view version history.

---

## ⚙️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js / Next.js |
| Backend    | Node.js + Express  |
| Database   | MongoDB (Mongoose) |
| Real-time  | Socket.IO (WebSocket) |
| Auth       | JWT (optional refresh tokens) |
| Deployment | Vercel (frontend), Fly.io / Render (backend), MongoDB Atlas |

---

## 🧱 Data Models

### 🔹 User
```js
{
  _id,
  name,
  email,
  passwordHash,
  notesSharedWith: [noteId],
  createdAt
}
```

### 🔹 Note
```js
{
  _id,
  title,
  content, // plain text or Quill Delta
  owner: userId,
  collaborators: [userId],
  versionHistory: [
    { editedBy, timestamp, diff }
  ],
  createdAt,
  updatedAt
}
```

### 🔹 Comment (Optional)
```js
{
  _id,
  noteId,
  userId,
  content,
  timestamp
}
```

### 🔹 ActiveEditors (Redis/In-Memory)
```js
{
  noteId: [userId1, userId2, ...]
}
```

---

## 🔌 REST APIs

### 🔐 Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

### 🗒️ Notes
- GET /api/notes/
- POST /api/notes/
- GET /api/notes/:id
- PUT /api/notes/:id
- DELETE /api/notes/:id

### 👥 Collaborators
- POST /api/notes/:id/collaborators
- GET /api/notes/:id/collaborators

### 💬 Comments
- GET /api/notes/:id/comments
- POST /api/notes/:id/comments

---

## 🔄 WebSocket Events (Socket.IO)

| Event            | Payload                         | Description              |
|------------------|----------------------------------|--------------------------|
| join-note        | { noteId, userId }              | User joins a note room   |
| note-changed     | { content, userId }             | Realtime content update  |
| user-typing      | { userId }                      | Show typing indicator    |
| user-left        | { userId }                      | Handle disconnect        |
| note-save        | { noteId, content }             | Trigger autosave         |
| sync-content     | { fullContent }                 | Full content sync        |

Each note = one socket room. All collaborators receive real-time updates.

---

## 🔐 Security Checklist

- ✅ JWT auth (stored in HTTP-only secure cookies)
- ✅ Password hashing with bcrypt
- ✅ Rate limiting with express-rate-limit
- ✅ Input sanitization to prevent XSS
- ✅ CSP headers using helmet
- ✅ Socket middleware to verify auth before joining a room

---

## 🧠 Version Control

- Save full content every X seconds (autosave)
- Store diffs via diff-match-patch if needed
- versionHistory[] on note model

---

## ✨ Optional Features

| Feature           | Description                              |
|-------------------|------------------------------------------|
| Markdown/Rich Editor | Use Quill.js or Tiptap                |
| View/Edit Roles   | Owner, collaborator, view-only           |
| Cursor Tracking   | Collaborative cursor presence            |
| Offline Support   | Save to IndexedDB, sync later            |
| Conflict Handling | Use CRDT/OT (advanced)                   |
| Notifications     | Socket events: user joined/left etc.     |

---

## 🧩 Engineering Plan Summary

1. Model MongoDB schemas for User, Note, Comment
2. Create RESTful APIs for auth, CRUD, sharing
3. Implement WebSocket logic via Socket.IO for real-time collab
4. Set up middleware for secure auth (JWT & socket)
5. Frontend handles:
   - Editor (Quill)
   - Collaboration (socket)
   - State management (Zustand/Context)
6. Add autosave, versioning & typing indicators
7. Deploy frontend/backend separately with environment configs

---

## ✅ Outcome

This app combines:
- CRUD + Real-time Sync
- Role-based collaboration
- Scalable backend & socket handling
- Secure auth & data access
- Version control & UX enhancements

---

