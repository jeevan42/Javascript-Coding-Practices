/**
 * mongodb-indexes-explained.js
 *
 * Explanation of MongoDB Indexes with definitions, benefits,
 * and examples on how to create and use indexes in MongoDB.
 *
 * Run this file with Node.js if you want to see the commands
 * printed out or use it as documentation.
 */

// What is an Index in MongoDB?
//
// An index is a special data structure that stores a small portion of the
// collection’s data set in an easy-to-traverse form. Indexes support
// efficient queries and can improve performance drastically.
//
// Without indexes, MongoDB must perform a collection scan, i.e. scan
// every document to select those that match the query statement.

console.log("MongoDB Indexes Explained\n");

// Why use Indexes?
console.log(`
Why use indexes?
- Improve query performance drastically by reducing documents scanned.
- Enforce uniqueness with unique indexes.
- Support sorting, range queries, and efficient join ($lookup) operations.
- Can be created on single or multiple fields (compound indexes).
`);

// Types of Indexes in MongoDB

console.log(`
Common types of MongoDB Indexes:
1. Single Field Index
2. Compound Index (multiple fields)
3. Multikey Index (for array fields)
4. Text Index (for text search)
5. Hashed Index (for sharding and equality queries)
6. Geospatial Indexes (2d, 2dsphere for location-based queries)
`);

// Example: Creating Indexes using Mongo Shell syntax (also works with Node.js driver)

// Connect to MongoDB before running these commands

// Single field index on 'username' field (ascending order)
const singleFieldIndex = `db.users.createIndex({ username: 1 })`;
console.log(`Create single field index:\n${singleFieldIndex}`);

// Compound index on 'lastName' (asc) and 'firstName' (desc)
const compoundIndex = `db.users.createIndex({ lastName: 1, firstName: -1 })`;
console.log(`\nCreate compound index:\n${compoundIndex}`);

// Unique index to prevent duplicate emails
const uniqueIndex = `db.users.createIndex({ email: 1 }, { unique: true })`;
console.log(`\nCreate unique index:\n${uniqueIndex}`);

// Multikey index example: index on array field 'tags'
const multikeyIndex = `db.articles.createIndex({ tags: 1 })`;
console.log(`\nCreate multikey index on array field:\n${multikeyIndex}`);

// Text index for text search on 'description' field
const textIndex = `db.products.createIndex({ description: "text" })`;
console.log(`\nCreate text index:\n${textIndex}`);

// Hashed index for sharding or hash-based lookup on 'userId'
const hashedIndex = `db.sessions.createIndex({ userId: "hashed" })`;
console.log(`\nCreate hashed index:\n${hashedIndex}`);

// Geospatial 2dsphere index on 'location' field for GeoJSON points
const geoIndex = `db.places.createIndex({ location: "2dsphere" })`;
console.log(`\nCreate geospatial index:\n${geoIndex}`);

// How to check existing indexes on a collection:
const listIndexes = `db.collection.getIndexes()`;
console.log(`\nList existing indexes:\n${listIndexes}`);

// Drop an index by name:
const dropIndex = `db.collection.dropIndex("indexName")`;
console.log(`\nDrop index by name:\n${dropIndex}`);

// Summary
console.log(`
Summary:
- Always create indexes on fields you query frequently.
- Use compound indexes if queries filter by multiple fields.
- Avoid over-indexing: each index slows down writes.
- Use explain() to analyze query performance and see if indexes are used.
`);

// Example of using explain() to check if index is used
const explainUsage = `db.users.find({ username: "alice" }).explain("executionStats")`;
console.log(`\nUse explain to check index usage:\n${explainUsage}`);
