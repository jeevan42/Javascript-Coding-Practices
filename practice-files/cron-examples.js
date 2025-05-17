

// cron-examples.js

const cron = require('node-cron');

// ✅ Basic Example: Run a task every minute
cron.schedule('* * * * *', () => {
  console.log('✅ Running a task every minute');
});

/* 
===============================
🕒 Cron Expression Format
===============================
* * * * * *
| | | | | |
| | | | | └── Day of week (0 - 7) (Sunday=0 or 7)
| | | | └──── Month (1 - 12)
| | | └────── Day of month (1 - 31)
| | └──────── Hour (0 - 23)
| └────────── Minute (0 - 59)
└──────────── Seconds (optional, not supported in node-cron)
*/

// 🔹 EXAMPLES OF CRON EXPRESSIONS:

// Every 5 seconds (Not supported in node-cron)
// Use setInterval or another scheduler for second-level tasks

// ✅ Every 5 minutes
cron.schedule('*/5 * * * *', () => { // (*/5) = "every 5th minute", starting at minute 0 (i.e., 0, 5, 10, 15, ..., 55).
  console.log('✅ Running every 5 minutes');
});

// ✅ Every hour
cron.schedule('0 * * * *', () => {
  console.log('✅ Running at the start of every hour');
});

// ✅ Every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('✅ Running every day at midnight');
});

// ✅ Every Monday at 10:00 AM
cron.schedule('0 10 * * 1', () => {
  console.log('✅ Running every Monday at 10:00 AM');
});

// ✅ Every 1st of the month at 12:00 AM
cron.schedule('0 0 1 * *', () => {
  console.log('✅ Running on the 1st of every month at midnight');
});

// ✅ Every December 25th at 8:00 AM
cron.schedule('0 8 25 12 *', () => {
  console.log('🎄 Running on Christmas Day at 8:00 AM');
});

// ✅ Every weekday at 9:00 AM (Monday through Friday)
cron.schedule('0 9 * * 1-5', () => {
  console.log('✅ Running at 9:00 AM on weekdays');
});

// ✅ Every weekend at 10:00 AM (Saturday and Sunday)
cron.schedule('0 10 * * 6,0', () => {
  console.log('✅ Running at 10:00 AM on weekends');
});

// /*
// ===============================
// 🔍 QUICK SYMBOLS GUIDE
// ===============================
// *    → Every value
// ,    → List (e.g., 1,2,3)
// -    → Range (e.g., 1-5)
// /    → Step values (e.g., */10 = every 10 units)

// ===============================
// 📚 node-cron Official Docs:
// https://www.npmjs.com/package/node-cron
// ===============================
// */

