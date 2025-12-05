import express from "express";
import {
  getLogin,
  login,
  getRegister,
  register,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

// =======================
// AUTH ROUTES
// =======================

// GET login page
router.get("/login", getLogin);

// POST login logic
router.post("/login", login);

// GET register page
router.get("/register", getRegister);

// POST register logic
router.post("/register", register);

// Logout route
router.get("/logout", logout);

export default router;
