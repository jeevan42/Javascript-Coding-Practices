/**
 * Mongoose Connection Example with Explanation
 *
 * This file demonstrates how to connect to MongoDB using Mongoose in Node.js.
 * It includes notes on why certain options (useNewUrlParser, useUnifiedTopology)
 * were previously used and their relevance in modern Mongoose versions.
 */

import mongoose from 'mongoose';

// Replace with your actual MongoDB URI
const mongoURI = 'mongodb://localhost:27017/mydb';

/**
 * Connection Options (only needed in Mongoose <6)
 * 
 * useNewUrlParser:
 *   - Enabled the new MongoDB connection string parser.
 *   - Solves issues and deprecation warnings from the legacy parser.
 * 
 * useUnifiedTopology:
 *   - Enables the new topology engine in MongoDB Node.js driver.
 *   - More reliable server discovery and monitoring.
 * 
 * 🔔 Note:
 * These options are now default in Mongoose 6.x and later.
 * You don't need to specify them unless you're using an older version.
 */

// Modern Mongoose (6.x+) — no need to specify extra options
mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

/**
 * To run:
 * 1. Make sure MongoDB is running locally or change the URI.
 * 2. Run `npm install mongoose`
 * 3. Execute with `node mongoose-connection-example.js`
 */
