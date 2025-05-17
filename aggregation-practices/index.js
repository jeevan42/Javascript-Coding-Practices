import { connectDB } from "../db/config.js";
import { Order } from "./models/order.model.js";
connectDB();




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

// 🎯 Task 1: Get the total number of orders placed by each user.


const fetchTotalOrderPlacedByEachUser = async () => {
    try {
        // const data = await Order.find();
        const pipeline = [
            {
                $group: {
                    _id: "$user_id",
                    total_order_placed: {
                        $sum: 1
                    }
                }
            }
        ]
        const aggregatedData = await Order.aggregate(pipeline);
        console.log(`aggregatedData is : `,
            {
                aggregatedData,
                length: aggregatedData.length
            });

    } catch (error) {
        console.log(`error : `, error)
    }
}

fetchTotalOrderPlacedByEachUser();


// 🎯 Task 2: Calculate the total order amount for each order (price × quantity).

// 🎯 Task 3: Find the top 5 users who spent the most money (sum of total order amounts).
