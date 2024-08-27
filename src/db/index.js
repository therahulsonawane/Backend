import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// const MONGODB_URI = "mongodb+srv://rahul:rahul@backend.uu6wx.mongodb.net";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI / DB_NAME}`
    );
    console.log(
      `\n MOngoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );
    // console.log(connectionInstance);
  } catch (error) {
    console.log("MONGODB Connection error", error);
    process.exit(1);
  }
};

export default connectDB;
