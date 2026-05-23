import express from "express";
import router from "./Routers/index.js";
import { connect_now } from "./Config/connection.js";
import config from "./Config/config.js";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import { rateLimit } from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});

connect_now(config.conn);

// Middleware
app.use(limiter);
app.use(express.json());
app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(mongoSanitize());

// Apply your routes
app.use("/japa/v1", router());

// Start the server
const port = config.port || 2500;
app.listen(port, () => console.log("The application is running on port", port));
