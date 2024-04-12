// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`server running bitch at ${port}`);
    });
  })
  .catch((error) => {
    console.log("mongo db connection failed: ", error);
  });

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`server is listening on port on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw err;
//   }
// })();
