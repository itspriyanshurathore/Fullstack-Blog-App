// routes/profileRoutes.js
import express from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";

import uploadAvatar from "../middlewares/uploadAvatar.js"; // correct

import cloudinary from "../config/cloudinary.js"; // correct

const router = express.Router();

// auth middleware
function isLoggedIn(req, res, next) {
  if (req.user) return next();
  return res.redirect("/login");
}

/* -----------------------------------------
   SHOW PROFILE PAGE
----------------------------------------- */
router.get("/profile", isLoggedIn, async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user._id }).sort({
      createdAt: -1,
    });
    const postCount = posts.length;

    res.render("profile", {
      title: "My Profile",
      user: req.user, // you also use res.locals.user
      posts,
      postCount,
    });
  } catch (err) {
    console.error("PROFILE ERROR:", err);
    res.status(500).send("Server error");
  }
});

/* -----------------------------------------
   UPDATE PROFILE (username, bio, tel, avatar)
----------------------------------------- */

router.post(
  "/profile/update",
  isLoggedIn,
  uploadAvatar.single("avatar"),
  async (req, res) => {
    try {
      const { username, bio, tel } = req.body;

      const updateData = { username, bio, tel };

      // New avatar uploaded?
      if (req.file) {
        // Delete old Cloudinary avatar
        if (req.user.profilePicture?.public_id) {
          try {
            await cloudinary.uploader.destroy(
              req.user.profilePicture.public_id
            );
          } catch (err) {
            console.log("Cloudinary delete error:", err.message);
          }
        }

        // Save new avatar
        updateData.profilePicture = {
          url: req.file.path, // Cloudinary URL
          public_id: req.file.filename, // Cloudinary public_id
        };
      }

      // Update in DB
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        updateData,
        { new: true }
      );

      // 🔥 IMPORTANT: Refresh session so EJS gets updated user data
      req.login(updatedUser, (err) => {
        if (err) {
          console.log("Session refresh error:", err);
        }
        return res.redirect("/profile");
      });
    } catch (err) {
      console.error("Profile update error:", err);
      res.status(500).send("Server error");
    }
  }
);

/* -----------------------------------------
   DELETE ACCOUNT
----------------------------------------- */
router.post("/profile/delete", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;

    // Delete Cloudinary avatar
    if (req.user.profilePicture?.public_id) {
      try {
        await cloudinary.uploader.destroy(req.user.profilePicture.public_id);
      } catch (err) {
        console.log("Avatar delete error:", err.message);
      }
    }

    // Delete posts
    await Post.deleteMany({ author: userId });

    // Delete user
    await User.findByIdAndDelete(userId);

    req.logout(() => res.redirect("/"));
  } catch (err) {
    console.error("DELETE ACCOUNT ERROR:", err);
    res.status(500).send("Server error");
  }
});

export default router;
