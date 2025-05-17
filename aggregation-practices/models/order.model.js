// models/order.model.js

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    products: [
        {
            product_id: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            price: Number
        }
    ],
    created_at: Date,
    status: String
});

export const Order = mongoose.model('Order', orderSchema);
