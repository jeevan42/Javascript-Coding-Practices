// 🧠 Problem Series: “ZippyMart” – A Simple E-Commerce DB
// 🔹 Stage 1 – Basic Aggregation (Beginner)
// 📌 Problem Statement
// You have a MongoDB collection named orders. Each document looks like:

//   {
//     "user_id": "662e8886f1a4c24d8c0c1231",
//     "products": [
//       { "product_id": "662e88a1f1a4c24d8c0c2231", "quantity": 2, "price": 100 },
//       { "product_id": "662e88a1f1a4c24d8c0c2232", "quantity": 1, "price": 250 }
//     ],
//     "created_at": "2024-05-10T08:00:00Z",
//     "status": "delivered"
//   },

import { Order } from "../models/order.model.js";


// 🎯 Task 1: Get the total number of orders placed by each user.

export const fetchTotalOrderPlacedByEachUser = async () => {
    try {
        const pipeline = [
            // Step 1: Group all orders by user_id
            {
                $group: {
                    _id: "$user_id",         // Grouping key: user_id

                    // Step 2: Count total orders for each user
                    // Since each document is an order, we just add 1 per doc
                    total_order_placed: { $sum: 1 }
                }
            }
        ];

        // Step 3: Run the aggregation on the Order collection
        const aggregatedData = await Order.aggregate(pipeline);

        // Step 4: Log result
        console.log("✅ Total orders placed by each user:\n", {
            aggregatedData,
            total_users: aggregatedData.length
        });

    } catch (error) {
        console.log("❌ Error during aggregation:", error);
    }
};

// fetchTotalOrderPlacedByEachUser();



// 🎯 Task 2: Calculate the total order amount for each order (price × quantity)

export const calculateTotalOrderAmountForEachOrder = async () => {
    try {
        const pipeline = [
            // Step 1: Flatten the products array — one document per product
            { $unwind: "$products" },

            // Step 2: For each product, calculate price * quantity = total_amount
            {
                $project: {
                    user_id: 1,             // Keep user_id for reference
                    order_id: "$_id",       // Rename _id to order_id for clarity
                    total_amount: {
                        $multiply: ["$products.quantity", "$products.price"]
                    }
                }
            },

            // Step 3: Group by order_id to sum all total_amounts of that order
            {
                $group: {
                    _id: "$order_id",  // Grouping per order

                    // ✅ Inside $group, we can't just write user_id: "$user_id"
                    // ❗ Because $group needs accumulator operators like $first
                    // 👇 Since all entries from same order have same user_id, we just pick the first
                    user_id: { $first: "$user_id" },

                    // Sum total amount for all products in the order
                    total_order_amount: { $sum: "$total_amount" }
                }
            }
        ];

        const aggregatedData = await Order.aggregate(pipeline);

        // Logging the result clearly
        console.log("✅ Total order amounts per order:\n", {
            orders: aggregatedData,
            total_orders: aggregatedData.length
        });

    } catch (error) {
        console.error("❌ Error during aggregation:", error);
    }
};

// calculateTotalOrderAmountForEachOrder();


// 🎯 Task 3: Find the top 5 users who spent the most money (sum of total order amounts)

export const findTopFiveUsersWhoSpentMostMoneyOnOrders = async () => {
    try {
        const pipeline = [
            // Step 1: Flatten the products array — one document per product
            { $unwind: "$products" },

            // Step 2: Calculate total amount (price × quantity) for each product
            {
                $project: {
                    user_id: 1, // We need this for grouping later
                    total_amount: {
                        $multiply: ["$products.quantity", "$products.price"]
                    }
                }
            },

            // Step 3: Group by user_id and sum all product totals for each user
            {
                $group: {
                    _id: "$user_id", // Grouping per user
                    total_order_amount: { $sum: "$total_amount" }
                }
            },

            // Step 4: Sort users by total_order_amount in descending order
            { $sort: { total_order_amount: -1 } },

            // Step 5: Limit to top 5 spenders
            { $limit: 5 }
        ];

        // Step 6: Run the aggregation
        const aggregatedData = await Order.aggregate(pipeline);

        // Step 7: Log the top spenders
        console.log("✅ Top 5 users by spending:\n", {
            orders: aggregatedData,
            total_users: aggregatedData.length
        });

    } catch (error) {
        console.error("❌ Error during aggregation:", error);
    }
};

// findTopFiveUsersWhoSpentMostMoneyOnOrders();


// 🔹 Task 4: $lookup to join orders with users and list user name + total spend
// ✅ Goal:
// Get output like:

// [
//   {
//     _id: ObjectId("..."),
//     name: "Jeevan",
//     total_spend: 2500
//   },
//   ...
// ]


export const findOutUsersNameAndTotalSpentOnDeliveredOrders = async () => {
    try {
        const pipeline = [
            {
                $match: { status: 'delivered' }
            },
            {
                $unwind: "$products"
            },
            {
                $addFields: {
                    userObjectId: { $toObjectId: "$user_id" }
                }
            },
            {
                $group: {
                    _id: "$userObjectId",
                    total_spend: {
                        $sum: { $multiply: ["$products.quantity", "$products.price"] }
                    }
                }
            },
            {
                $lookup: {
                    from: "users",           // The "users" collection you want to join with
                    localField: "_id",       // The field in the current collection (the _id field from the $group stage)
                    foreignField: "_id",     // The field in the "users" collection to match against
                    as: "user"               // The output array field where matched documents will be stored
                }
            },
            {
                $unwind: "$user"
            },
            {
                $project: {
                    _id: 0,
                    user_id: "$_id",
                    name: "$user.name",
                    total_spend: 1
                }
            }
        ];

        const aggregatedData = await Order.aggregate(pipeline)
        console.log("✅ Users with name and their total spending:\n", {
            data: aggregatedData,
            length: aggregatedData.length
        });
    } catch (error) {
        console.log(`error`, error)
    }

}

// findOutUsersNameAndTotalSpentOnDeliveredOrders()