/**
 * 📚 Pagination in Mongoose (Express + MongoDB)
 *
 * Pagination is used to retrieve data in chunks (pages), improving performance
 * and scalability for large datasets.
 *
 * ✅ Best practices:
 * - Use `limit` and `skip`.
 * - Always sanitize and default query params.
 * - Return metadata (page, totalPages, totalItems).
 */

// =========================
// Sample Model: User
// =========================
import User from "../models/user.model.js"; // Update path as per your structure

// =========================
// Controller: Get Paginated Users
// =========================
export const getPaginatedUsers = async (req, res) => {
  try {
    // 🧾 Step 1: Extract & sanitize query params
    const page = Math.max(1, parseInt(req.query.page)) || 1;        // Current page (default: 1)
    const limit = Math.max(1, parseInt(req.query.limit)) || 10;     // Items per page (default: 10)

    const skip = (page - 1) * limit;

    // 🧮 Step 2: Count total documents
    const totalItems = await User.countDocuments();

    // 🔎 Step 3: Fetch data with skip & limit
    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); // Optional: sort newest first

    // 🧾 Step 4: Send structured response
    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
      users,
    });
  } catch (error) {
    console.error("Pagination Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// =====================================
// ✅ Example API: /api/users?page=2&limit=5
// =====================================
// - Skips: (2 - 1) * 5 = 5
// - Fetches 5 users starting from index 5

// =====================
// 🔁 Summary
// =====================
/**
 * - Always validate & sanitize `page` and `limit`.
 * - Use `.skip()` and `.limit()` for pagination.
 * - Return metadata to help frontend (e.g., `totalPages`, `currentPage`).
 * - Sort results for consistency (e.g., by `createdAt`).
 */

// Optional Tip: Use Mongoose Pagination Plugin if needed
// https://www.npmjs.com/package/mongoose-paginate-v2
