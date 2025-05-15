/**
 * Demonstrating difference between `populate` and `lookup`
 * 
 * Collections: Users & Posts
 * Each Post has a reference to a User via userId
 * 
 * ✅ populate() works when a field explicitly stores the ObjectId reference (e.g., Post → user).
 * ❌ populate() does NOT work in reverse (e.g., User → Posts) unless we define a "virtual field".
 * 
 * 👉 To enable reverse population (e.g., find all posts of a user via User model),
 * you must define a virtual populate in the schema:
 * 
 * Example:
 * 
 * UserSchema.virtual("posts", {
 *   ref: "Post",
 *   localField: "_id",
 *   foreignField: "user"
 * });
 * 
 * UserSchema.set("toObject", { virtuals: true });
 * UserSchema.set("toJSON", { virtuals: true });
 * 
 * Then you can do:
 * const users = await User.find().populate("posts");
 */

const mongoose = require("mongoose");

// ====== SCHEMAS ======

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
});

// 👇 Uncomment below to enable reverse populate (User → Posts)
/*
UserSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "user"
});
UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });
*/

const User = mongoose.model("User", UserSchema);

// Post Schema with ref
const PostSchema = new mongoose.Schema({
  title: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // <-- Reference
});
const Post = mongoose.model("Post", PostSchema);

// ====== USING POPULATE (Mongoose) ======

const fetchPostsWithUser = async () => {
  const posts = await Post.find().populate("user"); // auto joins User data
  console.log("Posts with populated user:", posts);
};

// ====== USING LOOKUP (Aggregation) ======

const fetchPostsWithUserLookup = async () => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",         // target collection
        localField: "user",    // field in Post
        foreignField: "_id",   // field in User
        as: "userDetails"
      }
    },
    {
      $unwind: "$userDetails" // optional, flattens array
    }
  ]);
  console.log("Posts with lookup user:", posts);
};
