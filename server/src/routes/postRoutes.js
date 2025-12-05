import express from "express";
import { upload } from "../middlewares/Upload.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { addComment } from "../controllers/commentController.js";

import {
  getCreatePostPage,
  createPost,
  getEditPostPage,
  updatePost,
  deletePost,
  getSinglePost,
} from "../controllers/postController.js";

const router = express.Router();

// Create
router.get("/post/create", isAuthenticated, getCreatePostPage);
router.post(
  "/post/create",
  isAuthenticated,
  upload.single("image"),
  createPost
);
//View Single Post
router.get("/post/:id", getSinglePost);
// Comment on Post
router.post("/post/:id/comment", isAuthenticated, addComment);

// Edit
router.get("/post/edit/:id", isAuthenticated, getEditPostPage);
router.post(
  "/post/edit/:id",
  isAuthenticated,
  upload.single("image"),
  updatePost
);

// Delete
router.post("/post/delete/:id", isAuthenticated, deletePost);

export default router;
