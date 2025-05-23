/**
 * ------------------------------------------
 * 📁 MongoDB Data Retrieval - Interview Prep
 * ------------------------------------------
 *
 * Using Mongoose Model methods to retrieve data.
 * Schema: User with nested addresses
 *
 * 👇 Various ways to retrieve data from MongoDB:
 */

import mongoose from "mongoose"; 
const User = require("./models/user.model"); // Assume user.model.js is already defined

// 1️⃣ Find all users
const allUsers = await User.find();

// 2️⃣ Find users with a filter condition (e.g. name = "Jeevan")
const jeevanUsers = await User.find({ name: "Jeevan" });

// 3️⃣ Find one user by a condition
const oneUser = await User.findOne({ name: "Jeevan" });

// 4️⃣ Find by ID
const userById = await User.findById("00000000000000000008454a");

// 5️⃣ Projection: Get only name and addresses
const userWithSelectedFields = await User.find({}, { name: 1, addresses: 1 });

// 6️⃣ Using `lean()` for plain JS objects (faster read)
const plainUser = await User.findOne({ name: "Jeevan" }).lean();

// 7️⃣ Limit & Skip (for pagination)
const paginatedUsers = await User.find().skip(10).limit(5);

// 8️⃣ Sort results
const sortedUsers = await User.find().sort({ name: 1 }); // 1 = asc, -1 = desc

// 9️⃣ Nested field query (address pincode match)
const usersWithPincode = await User.find({ "addresses.pincode": 123456 });

// 🔟 Using Regex (e.g. partial name match, case-insensitive)
const usersByRegex = await User.find({ name: { $regex: "jeev", $options: "i" } });

/**
 * 📌 Bonus: Aggregation pipeline (advanced queries)
 */
const aggExample = await User.aggregate([
  { $match: { "addresses.pincode": 123456 } },
  { $project: { name: 1, addressCount: { $size: "$addresses" } } }
]);

/**
 * 💡 Summary:
 * 1. find()           → Multiple results
 * 2. findOne()        → Single result
 * 3. findById()       → By _id only
 * 4. projection       → Include specific fields
 * 5. lean()           → Plain JS object instead of Mongoose doc
 * 6. skip(), limit()  → Pagination
 * 7. sort()           → Sorting
 * 8. nested field     → Dot notation
 * 9. regex            → Pattern matching
 * 10. aggregate()     → Complex queries
 */
