import mongoose from "mongoose";

export const config = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to db."))
    .catch((error) => console.error("MongoDB connection error:", error));
};
