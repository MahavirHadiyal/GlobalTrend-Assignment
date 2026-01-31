// server.js (top level)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server is Live");
});

// Move DB connect into a route or startup wrapper
// app.get("/api/health", async (req, res) => {
//   try {
//     await connectDB();
//     res.json({ status: "OK", db: "connected" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "DB connect failed" });
//   }
// });

await connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
