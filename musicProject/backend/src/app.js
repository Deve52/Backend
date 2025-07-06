import express from "express"
import connectDB  from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import songRoutes from "./routes/song.routes.js";
import cookieParser from "cookie-parser";

let app = express();

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use("/auth", userRoutes)
app.use("/songs", songRoutes);

export default app;
