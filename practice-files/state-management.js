/**
 * 🧠 JavaScript State Management Overview
 *
 * State = data/variables that define the UI or behavior.
 * We manage it across components, pages, or even sessions/devices.
 *
 * 📦 Categories:
 * - ✅ Frontend (Client-side): React State, Context API, Redux, Zustand, localStorage, etc.
 * - ✅ Backend (Server-side): Sessions, cookies, tokens (JWT), database.
 *
 * Let's explore all:
 */

// ==================================================
// 1️⃣ localStorage (Browser only)
// ==================================================
/**
 * - Stores data **persistently** in the browser (no expiry).
 * - Survives page refresh and tab close.
 * - Not secure for sensitive data (visible via DevTools).
 */

localStorage.setItem("user", JSON.stringify({ name: "Jeevan" }));
const user = JSON.parse(localStorage.getItem("user"));
localStorage.removeItem("user");

// ✅ Use: Theme toggle, cart items, non-sensitive user preferences.

// ==================================================
// 2️⃣ sessionStorage (Browser only)
// ==================================================
/**
 * - Similar to localStorage, but cleared on tab close.
 * - Per-tab memory.
 */

sessionStorage.setItem("tempToken", "abc123");

// ✅ Use: Temporary state like onboarding progress, single tab forms.

// ==================================================
// 3️⃣ Cookies 🍪
// ==================================================
/**
 * - Stores small pieces of data, optionally sent with every HTTP request.
 * - Can be **httpOnly** and **secure**, better for auth.
 * - Expiry can be controlled.
 */

document.cookie = "theme=dark; max-age=3600;";

// ✅ Use: Session tokens, feature flags, A/B testing, auth (server reads).

// ==================================================
// 4️⃣ Sessions (Server-side)
// ==================================================
/**
 * - Server stores session data (e.g., user info).
 * - Client holds a session ID in cookie.
 * - Express uses `express-session`.
 */

req.session.user = { id: "123", name: "Jeevan" }; // Example

// ✅ Use: Auth login system where state is stored securely on backend.

// ==================================================
// 5️⃣ React useState + useEffect (Local Component State)
// ==================================================
/**
 * - useState holds UI state within a component.
 * - useEffect handles side-effects (like localStorage sync).
 */

import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <button onClick={() => setTheme("dark")}>Dark Mode</button>;
}

// ✅ Use: Form inputs, UI toggles, dynamic behavior.

// ==================================================
// 6️⃣ Context API (React Global State)
// ==================================================
/**
 * - Pass state between deeply nested components.
 * - Lightweight global state management.
 */

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

// ✅ Use: Theme, auth user, language preference, simple app-wide state.

// ==================================================
// 7️⃣ Redux / Redux Toolkit
// ==================================================
/**
 * - Centralized state container.
 * - Uses actions, reducers, and immutable updates.
 * - Redux Toolkit simplifies setup.
 */

import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value++ },
  },
});

export const { increment } = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });

// ✅ Use: Complex apps, dashboards, cross-component data syncing, devtools.

// ==================================================
// 8️⃣ Zustand (Minimal React State Management)
// ==================================================
/**
 * - Lightweight, fast, no boilerplate.
 * - Global state via hooks.
 */

import create from "zustand";

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}

// ✅ Use: Small apps, atomic updates, shared global state.

// ==================================================
// 🔐 BONUS: Token-based State (JWT)
// ==================================================
/**
 * - Store JWT in localStorage or cookie.
 * - Used to manage login/auth state.
 * - Backend verifies token on each request.
 */

// Store token (not secure in localStorage)
localStorage.setItem("token", "JWT_abc123");

// ✅ Use: Stateless authentication system

// ==================================================
// 📚 Summary Table
// ==================================================

/*
| Method         | Scope           | Persistent | Secure | Use Case                            |
|----------------|------------------|------------|--------|-------------------------------------|
| localStorage   | Client-side      | ✅         | ❌     | Theme, cart                         |
| sessionStorage | Client-side      | ❌ (per tab)| ❌     | Temporary form state                |
| Cookies        | Client & Server  | ✅         | ✅     | Auth token, feature flags           |
| Session        | Server-side      | ✅         | ✅     | Login session                       |
| useState       | React Component  | ❌         | ✅     | UI state                            |
| Context API    | React App        | ❌         | ✅     | Theme, user                         |
| Redux Toolkit  | React App        | ❌         | ✅     | Dashboards, enterprise apps         |
| Zustand        | React App        | ❌         | ✅     | Simple global state                 |
| JWT            | Client + Backend | ✅         | ✅     | Auth (stateless)                    |
*/

// 🧠 Tip: Combine techniques.
// Example: JWT in cookie + Redux in frontend + Redis session store
