import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Loading homepage...");

    const posts = await Post.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });

    console.log("Posts loaded:", posts.length);

    res.render("home", {
      title: "Blog Application",
      user: req.user || null,
      posts,
    });
  } catch (err) {
    console.error("🔥 HOME PAGE ERROR:", err);
    res.status(500).send("Failed to load homepage: " + err.message);
  }
});

export default router;
