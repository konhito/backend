import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectioInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      console.log(`MONGODB CONNECTED... DB HOST: `),
    );
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
