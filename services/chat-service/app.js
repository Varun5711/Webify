import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  })
);

app.use("/api/chat", chatRoutes);

export default app;