import express from "express";
import morgan from "morgan";
import router from "./routes/health.routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(securityMiddleware);

// Routes
app.use("/openapi/v1", router);

export default app;