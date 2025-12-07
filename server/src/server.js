import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
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

// initialize passport strategies
passportConfig(passport);

const app = express();

// Correct dirname usage for serverless
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ====== MIDDLEWARE ======
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====== FIX SESSION FOR VERCEL ======
// express-session DOES NOT WORK on Vercel
// Use cookie-session instead
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SESSION_SECRET || "supersecret",
    httpOnly: true,
    secure: false, // must be false on Vercel free https
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// provide user to templates
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// ====== EJS VIEW ENGINE ======
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

// ====== ROUTES ======
app.use("/", userRoutes);
app.use("/", homeRoutes);
app.use("/", postRoutes);
app.use("/", profileRoutes);
app.use("/ai", aiRoutes);
app.use("/", commentRoutes);

// ====== ERROR HANDLING ======
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

// ====== DB CONNECT (runs once) ======
connectDB();

// ====== EXPORT (required for Vercel) ======
export const handler = serverless(app);
export default handler;
