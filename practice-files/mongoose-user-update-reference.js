/**
 * ------------------------------------------
 * 📁 Mongoose User Update - Interview Notes
 * ------------------------------------------
 *
 * 🎯 Collection: users
 *
 * 📄 Example Schema (for reference):
 * const userSchema = new mongoose.Schema({
 *   name: String,
 *   addresses: [
 *     {
 *       address_id: mongoose.Types.ObjectId,
 *       pincode: Number
 *     }
 *   ]
 * });
 *
 * 📄 Example Document:
 * {
 *   _id: ObjectId("8454"),
 *   name: "Jeevan",
 *   addresses: [
 *     { address_id: ObjectId("445565"), pincode: 258695 },
 *     { address_id: ObjectId("998877"), pincode: 400001 }
 *   ]
 * }
 *
 * 🔧 TASK 1: Update a specific address's pincode
 * 🔧 TASK 2: Update the user's name
 *
 * 🛠️ Mongoose Queries:
 */

import mongoose from ("mongoose");

// TASK 1: Update a user's address pincode
await User.updateOne(
  {
    _id: new mongoose.Types.ObjectId("8454"),
    "addresses.address_id": new mongoose.Types.ObjectId("445565")
  },
  {
    $set: { "addresses.$.pincode": 123456 }
  }
);

// TASK 2: Update user's name
await User.updateOne(
  { _id: new mongoose.Types.ObjectId("8454") },
  { $set: { name: "Jeevan Reddy" } }
);

/**
 * 💡 Notes:
 * - Use `mongoose.Types.ObjectId()` to construct ObjectId values.
 * - `$` is the positional operator that targets the matched array element.
 * - These queries go inside async functions in real code, but this file is only for reference.
 */
