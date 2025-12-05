import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.render("home", {
      title: "Blog Application",
      user: req.user || null,
      posts,
    });
  } catch (err) {
    console.error("HOME PAGE ERROR:", err);
    res.status(500).send("Failed to load homepage");
  }
});

export default router;
