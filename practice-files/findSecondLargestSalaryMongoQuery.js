/**
 * Problem: Find the Second Highest Salary from a Salaries Collection
 *
 * Description:
 * You are given a MongoDB collection "Salaries" that contains employee salary data.
 * Each document has fields like id, name, and salary.
 *
 * Example Data:
 * [
 *   { id: 1, name: "jeevan", salary: 70000 },
 *   { id: 2, name: "rana", salary: 49000 },
 *   { id: 3, name: "rahul", salary: 15000 },
 *   { id: 4, name: "shiv", salary: 98000 }
 * ]
 *
 * Goal:
 * Find the document(s) of the employee(s) having the second highest salary.
 *
 * ----------------------------------------------------------
 * ✅ Solution 1: Using .find().sort().skip().limit()
 * (This was Jeevan's original solution — correct and efficient.)
 */

function solution1_findSortSkipLimit() {
  return Salaries.find()
    .sort({ salary: -1 }) // Sort salaries descending
    .skip(1)              // Skip the highest
    .limit(1);            // Get the second highest
}

/**
 * ----------------------------------------------------------
 * ✅ Solution 2: Using Aggregation Pipeline (Basic)
 * Recommended in interviews for clarity and scalability.
 */

function solution2_basicAggregation() {
  return Salaries.aggregate([
    { $sort: { salary: -1 } }, // Highest first
    { $skip: 1 },              // Skip top salary
    { $limit: 1 }              // Get the next one
  ]);
}

/**
 * ----------------------------------------------------------
 * ✅ Solution 3: Using Aggregation with $group (Handles duplicates)
 * If two people have the same second-highest salary,
 * this approach fetches both.
 *
 * 🧠 Explanation of key part:
 * employees: { $push: "$$ROOT" } → Pushes the whole document into the 'employees' array.
 *
 * 🧪 Example Input:
 * [
 *   { name: "A", salary: 9000 },
 *   { name: "B", salary: 7000 },
 *   { name: "C", salary: 9000 }
 * ]
 *
 * 📦 After Grouping:
 * [
 *   {
 *     _id: 9000,
 *     employees: [
 *       { name: "A", salary: 9000 },
 *       { name: "C", salary: 9000 }
 *     ]
 *   },
 *   {
 *     _id: 7000,
 *     employees: [
 *       { name: "B", salary: 7000 }
 *     ]
 *   }
 * ]
 */

function solution3_aggregationWithGroup() {
  return Salaries.aggregate([
    {
      $group: {
        _id: "$salary",                 // Group by salary
        employees: { $push: "$$ROOT" } // Collect all employees with this salary
      }
    },
    { $sort: { _id: -1 } },            // Sort by salary descending
    { $skip: 1 },                      // Skip the highest group
    { $limit: 1 }                      // Return the second-highest salary group
  ]);
}

// 🧪 Example call (Note: These functions require a MongoDB environment)
/*
solution1_findSortSkipLimit();
solution2_basicAggregation();
solution3_aggregationWithGroup();
*/
