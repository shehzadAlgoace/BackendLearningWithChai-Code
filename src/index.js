// required("dotenv").config({ path: "./env" });

import connectDB from "./db";
import dotenv from "dotenv";
connectDB();

dotenv.config({
  path: "./env",
});

// import express from "express";
// const app = express();
// // connect to db and start server
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log(
//         "MongoDB connection error. Please make sure MongoDB is running."
//       );
//       throw new Error(error);
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// })();
