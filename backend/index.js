import express from "express";
import cors from "cors";
import allRoutes from "./routes/route.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", allRoutes);

// Start the server
app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});
