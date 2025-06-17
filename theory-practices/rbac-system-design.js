/**
 * 🛡️ ROLE-BASED ACCESS CONTROL (RBAC) — Complete Guide
 *
 * RBAC is a permission model where access is based on assigned roles.
 * Each role is assigned specific permissions (like "create user", "edit blog").
 * Users are assigned one or more roles.
 */

// ===========================================================
// 💡 WHY RBAC?
// ===========================================================

/**
 * ✅ Centralized and maintainable permission system
 * ✅ Prevents permission sprawl
 * ✅ Scalable — easy to assign roles to users
 * ✅ Common in multi-tenant or admin-based systems
 */

// ===========================================================
// 🧱 BASIC MODELING
// ===========================================================

/**
 * Users → have → Roles → have → Permissions
 *
 * 👤 User
 *    └── Role(s): ['admin', 'editor']
 *           └── Permissions: ['create_post', 'delete_post']
 */

// ===========================================================
// 🧾 Example Permissions
// ===========================================================
const permissions = [
  "create_user",
  "read_user",
  "update_user",
  "delete_user",
  "create_post",
  "read_post",
  "update_post",
  "delete_post"
];

// ===========================================================
// 🎭 Example Roles
// ===========================================================
const roles = {
  admin: permissions, // full access
  editor: ["create_post", "read_post", "update_post"],
  viewer: ["read_post"]
};

// ===========================================================
// 🧑‍💻 MONGOOSE MODELING
// ===========================================================

/**
 * Role Schema:
 *  - name: 'admin'
 *  - permissions: ['create_post', 'delete_user']
 *
 * User Schema:
 *  - name, email, password...
 *  - roles: [role_id1, role_id2]
 */

import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: [{ type: String }]
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }]
});

const Role = mongoose.model("Role", RoleSchema);
const User = mongoose.model("User", UserSchema);

// ===========================================================
// 🧪 AUTH MIDDLEWARE (Express)
// ===========================================================

/**
 * Checks if user has permission to perform an action
 */
const hasPermission = (requiredPermission) => async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("roles");
  const userPermissions = user.roles.flatMap(role => role.permissions);

  if (userPermissions.includes(requiredPermission)) {
    return next();
  } else {
    return res.status(403).json({ message: "Access Denied" });
  }
};

// 👇 Example Usage:
app.delete("/api/posts/:id", hasPermission("delete_post"), deletePostHandler);

// ===========================================================
// 🌐 REAL-WORLD USE CASES
// ===========================================================

/**
 * 1. Admin panels
 * 2. SaaS multi-role apps (viewer, team-lead, manager)
 * 3. Content Management Systems (author, editor, publisher)
 */

// ===========================================================
// 🧠 BEST PRACTICES
// ===========================================================

/**
 * ✅ Keep permission names consistent and lowercase
 * ✅ Store permissions as enums or constants
 * ✅ Allow role editing only via secure admin UI
 * ✅ Add caching if roles/permissions are large (Redis)
 */

// ===========================================================
// ✅ SUMMARY
// ===========================================================

/**
 * - RBAC = Users → Roles → Permissions
 * - Define clear roles in DB (admin, editor, viewer)
 * - Check permission on every protected route
 * - Avoid hardcoding role names in logic
 * - You can extend this to include: Organization-level roles (multi-tenant)
 */

