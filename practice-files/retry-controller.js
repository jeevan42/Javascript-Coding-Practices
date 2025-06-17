/**
 * 🔁 Retry Logic in Controller (Max 3 Attempts)
 *
 * Sometimes API calls or DB operations may fail due to temporary issues.
 * Implementing a retry mechanism can increase fault tolerance.
 *
 * ✅ Best Practices:
 * - Keep max retries limited (e.g. 3)
 * - Add small delay if needed (for async backoff)
 * - Avoid retrying on known permanent errors (optional improvement)
 */

import SomeModel from "../models/some.model.js"; // Change accordingly

// ================================
// Controller: Retry on Failure (Max 3)
// ================================
export const fetchDataWithRetry = async (req, res) => {
  const MAX_RETRIES = 3;

  const attemptFetch = async (attempt = 1) => {
    try {
      console.log(`🔁 Attempt ${attempt}`);

      // 👉 Simulate a task (e.g., DB read)
      const result = await SomeModel.find();

      // ✅ Success
      return res.status(200).json({
        success: true,
        message: `Success on attempt ${attempt}`,
        data: result,
      });
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed`, error);

      if (attempt < MAX_RETRIES) {
        // ⏱️ Optionally wait before retrying
        return attemptFetch(attempt + 1);
      } else {
        // ❌ Final failure
        return res.status(500).json({
          success: false,
          message: "Failed after 3 retries",
        });
      }
    }
  };

  attemptFetch(); // 🔄 Initial attempt
};

// =====================
// 🧪 Summary
// =====================
/**
 * - Uses recursion for retrying failed operations.
 * - Automatically exits after 3 failed attempts.
 * - Optionally you can add setTimeout for delay or exponential backoff.
 */
