import express from "express";
import cors from "cors";
import allRoutes from "./routes/route.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://dsacopy-rnin.vercel.app/"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());


// Routes
app.use("/api/auth", allRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
