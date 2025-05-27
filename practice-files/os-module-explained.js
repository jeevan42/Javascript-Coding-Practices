// os-module-explained.js

// ✅ Importing the built-in 'os' module in Node.js
import * as os from 'os';

/**
 * 💡 What is 'os' module?
 * The 'os' module in Node.js provides operating system-related utility methods and properties.
 * It allows developers to access system-level information like CPU details, memory, user info, platform, etc.
 */

// -------------------- OS Module Methods with Explanations --------------------

// 🧠 1. Platform - Returns the OS platform (e.g., 'linux', 'win32', 'darwin')
console.log('Platform:', os.platform()); // Output: 'win32' on Windows

// 🔍 2. Architecture - Returns CPU architecture (e.g., 'x64', 'arm')
console.log('Architecture:', os.arch()); // Output: 'x64'

// 💾 3. Total System Memory in bytes
console.log('Total Memory:', os.totalmem(), 'bytes');

// 📉 4. Free Memory in bytes
console.log('Free Memory:', os.freemem(), 'bytes');

// 👥 5. User Info - Returns current user information
console.log('User Info:', os.userInfo());

// 🖥️ 6. Hostname - Returns system hostname
console.log('Hostname:', os.hostname());

// 🔄 7. Uptime - System uptime in seconds
console.log('System Uptime:', os.uptime(), 'seconds');

// 🔌 8. Network Interfaces - Returns network interfaces (like IP, MAC, etc.)
console.log('Network Interfaces:', os.networkInterfaces());

// 💻 9. CPUs - Detailed info about each CPU/core
console.log('CPU Info:', os.cpus());

// 🗂️ 10. Home Directory - Returns the current user's home directory
console.log('Home Directory:', os.homedir());

/**
 * 🔚 Summary:
 * The 'os' module is useful for:
 * - Building CLI tools
 * - Monitoring system health
 * - Environment-specific behavior
 * - Logging/debugging system details
 *
 * ✅ No installation required — it's built into Node.js
 */

