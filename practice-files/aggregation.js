/**
 * aggregation.js
 * 
 * MongoDB Aggregation Pipeline Explained with Examples
 * 
 * Aggregation is a way to process data records and return computed results.
 * It's like SQL's GROUP BY but much more powerful.
 * 
 * Aggregation pipelines consist of stages, each stage transforms the data.
 * Common stages:
 * - $match: filters documents (like WHERE)
 * - $group: groups documents by key and aggregates values
 * - $sort: sorts documents
 * - $project: reshapes documents (selects fields, creates new fields)
 * - $lookup: joins collections
 * 
 * Example scenario: We have a 'sales' collection with documents like:
 * { item: "apple", price: 10, quantity: 2, store: "A" }
 * 
 * We want to find total sales per item.
 */

const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  store: String
});

const Sale = mongoose.model('Sale', SaleSchema);

const exampleAggregation = async () => {
  // Sample pipeline: Calculate total sales per item
  const pipeline = [
    {
      $group: {
        _id: "$item", // group by item
        totalQuantity: { $sum: "$quantity" }, // sum of quantity
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } } // sum of price * quantity
      }
    },
    {
      $sort: { totalRevenue: -1 } // sort descending by revenue
    }
  ];

  const results = await Sale.aggregate(pipeline);
  console.log("Total sales per item:", results);
};

/**
 * Additional common aggregation stages:
 * 
 * $match:
 *   Filters documents to pass only those that match criteria.
 *   Example: { $match: { store: "A" } }
 * 
 * $project:
 *   Reshapes each document, can include/exclude fields or add new fields.
 *   Example: { $project: { item: 1, totalPrice: { $multiply: ["$price", "$quantity"] } } }
 * 
 * $lookup:
 *   Performs a left join with another collection.
 *   Example:
 *     {
 *       $lookup: {
 *         from: "stores",
 *         localField: "store",
 *         foreignField: "name",
 *         as: "storeDetails"
 *       }
 *     }
 */

module.exports = {
  exampleAggregation
};
