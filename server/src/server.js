import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import path from "path";
import serverless from "serverless-http";
import { fileURLToPath } from "url";

import connectDB from "../src/config/db.js";
import userRoutes from "../src/routes/authRoutes.js";
import homeRoutes from "../src/routes/homeRoutes.js";
import postRoutes from "../src/routes/postRoutes.js";
import aiRoutes from "../src/routes/ai.js";
import profileRoutes from "../src/routes/profileRoutes.js";
import commentRoutes from "../src/routes/commentRoutes.js";
import passportConfig from "../src/config/passport.js";

// Initialize passport strategies
passportConfig(passport);

// Create express app
const app = express();

// Fix dirname for serverless
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SESSION (only works with cookie-session in Vercel, local only)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // ❗ secure must remain false for non-HTTPS
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// inject user into locals
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// ===== VIEW ENGINE =====
app.set("view engine", "ejs");
// Must use absolute path because serverless runs from project root
app.set("views", path.join(process.cwd(), "src", "views"));

// ===== ROUTES =====
app.use("/", userRoutes);
app.use("/", homeRoutes);
app.use("/", postRoutes);
app.use("/", profileRoutes);
app.use("/ai", aiRoutes);
app.use("/", commentRoutes);

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

// ===== DATABASE CONNECT (runs once only) =====
connectDB();

// ===== EXPORT AS SERVERLESS FUNCTION =====
export const handler = serverless(app);
export default handler;
