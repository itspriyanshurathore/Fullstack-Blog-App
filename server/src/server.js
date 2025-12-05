import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import userRoutes from "./routes/authRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import passportConfig from "./config/passport.js";
import postRoutes from "./routes/postRoutes.js";
import aiRoutes from "./routes/ai.js";
import profileRoutes from "./routes/profileRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

passportConfig(passport);

const app = express();
const PORT = process.env.PORT || 4000;

// dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
app.use("/", userRoutes);
app.use("/", homeRoutes);
app.use("/", postRoutes);
app.use("/", profileRoutes);
app.use("/ai", aiRoutes);
app.use("/", commentRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

// start server
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
});
