import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";
import path from "path";
import serverless from "serverless-http";

import connectDB from "../config/db.js";
import passportConfig from "../config/passport.js";

import userRoutes from "../routes/authRoutes.js";
import homeRoutes from "../routes/homeRoutes.js";
import postRoutes from "../routes/postRoutes.js";
import aiRoutes from "../routes/ai.js";
import profileRoutes from "../routes/profileRoutes.js";
import commentRoutes from "../routes/commentRoutes.js";

passportConfig(passport);

const app = express();

/* ===================== DB (SAFE FOR SERVERLESS) ===================== */
let isConnected = false;
const dbConnectOnce = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};
dbConnectOnce();

/* ===================== MIDDLEWARE ===================== */
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===================== SESSION ===================== */
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SESSION_SECRET || "supersecret",
    httpOnly: true,
    secure: true, // REQUIRED ON VERCEL
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  }),
);

/* ===================== PASSPORT FIX ===================== */
app.use((req, res, next) => {
  if (!req.session) return next();
  req.session.regenerate ||= (cb) => cb();
  req.session.save ||= (cb) => cb();
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

/* ===================== EJS FIX ===================== */
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static(path.join(process.cwd(), "public")));

/* ===================== ROUTES ===================== */
app.use("/", homeRoutes);
app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", profileRoutes);
app.use("/ai", aiRoutes);
app.use("/", commentRoutes);

/* ===================== ERROR HANDLER ===================== */
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);
  res.status(500).send("Internal Server Error");
});

/* ===================== EXPORT FOR VERCEL ===================== */
export const handler = serverless(app);
export default handler;
