

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const PORT = 5000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    
    res.json("Server is Live");
})

await connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
