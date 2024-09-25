import mongoose from "mongoose";

export const connectToDb = async () => {
    const connection = {}

    try {
        if (connection.isConnected) return;
        await mongoose.connect(process.env.URI);
    } catch (error) {
        throw new Error (error);
    }
}