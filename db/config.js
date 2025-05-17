import mongoose from "mongoose";
import { config } from "dotenv";

config();
const MONGO_URI = process.env.MONGO_URI;


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`DB connection done`);
    } catch (error) {
        console.log(`DB connection error`, error);
    }
}