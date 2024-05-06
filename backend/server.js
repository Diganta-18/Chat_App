import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //middleware to parse json data(from req.body)
app.use(cookieParser()); //middleware to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//app.get("/", (req, res) => {
//root route http://localhost:5000/
// res.send("Backend Server is runnifgsfg");
//  });

app.listen(5000, () => {
  connectToMongoDB();
  console.log("Server running on port ${PORT}");
});
