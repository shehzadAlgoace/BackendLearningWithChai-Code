import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    // mongoose provide return object
    const connectionInstance = await mongoose.connect(
      `$process.env.Mongo_URI/${DB_NAME}`
    );

    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
