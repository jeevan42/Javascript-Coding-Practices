/**
 * 📦 CommonJS vs ES Modules
 *
 * Node.js supports both module systems.
 * - CommonJS (CJS) => require(), module.exports
 * - ECMAScript Modules (ESM) => import/export
 */

// ✅ CommonJS Example (Node default)
/*
const fs = require('fs');
module.exports = { readFile };
*/

// ✅ ES Module Example (used in browser & modern Node)
/*
import fs from 'fs';
export const readFile = () => {};
*/

/**
 * 🧠 Differences:
 * - Syntax: require vs import
 * - Execution: CommonJS is synchronous, ESM is async.
 * - Top-level await: Only in ESM.
 * - ESM needs "type": "module" in package.json (or .mjs extension)
 */
