import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

// Connect DB once at startup
connectDB().catch((err) => {
  console.error("DB connection failed:", err);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server is Live");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
