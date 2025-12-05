import Post from "../models/Post.js";
import cloudinary from "../config/cloudinary.js";

// Render Create Post Page
export const getCreatePostPage = (req, res) => {
  res.render("newPost", {
    title: "Create New Post",
    user: req.user || null,
  });
};

// Create Post (Cloudinary Upload)
export const createPost = async (req, res) => {
  try {
    console.log("FILE RECEIVED FROM CLOUDINARY:", req.file);

    const { title, description, category, content } = req.body;

    if (!req.file) {
      return res.status(400).send("Image is required");
    }

    // CloudinaryStorage fields
    const cloudinaryUrl = req.file.path; // Full HTTPS URL
    const publicId = req.file.filename; // public_id

    const newPost = new Post({
      title,
      description,
      category,
      content,
      author: req.user._id,
      images: [
        {
          url: cloudinaryUrl,
          public_id: publicId,
        },
      ],
    });

    await newPost.save();
    res.redirect("/profile");
  } catch (error) {
    console.error("POST CREATION ERROR:", error);
    res.status(500).send("Failed to create post");
  }
};

// View Single Post (Full Blog Page)
export const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author")
      .populate({
        path: "comments",
        populate: { path: "author", model: "User" },
      })
      .sort({ createdAt: -1 });

    if (!post) {
      return res.status(404).send("Post not found");
    }

    res.render("singlePost", {
      title: post.title,
      user: req.user || null,
      post,
    });
  } catch (error) {
    console.log("GET SINGLE POST ERROR:", error);
    res.status(500).send("Failed to load blog post");
  }
};

// Render Edit Post Page
export const getEditPostPage = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send("Post not found");
    }

    // Only allow owner to edit
    if (!req.user || post.author.toString() !== req.user._id.toString()) {
      return res.status(403).send("You are not authorized to edit this post");
    }

    res.render("editPost", {
      title: "Edit Post",
      user: req.user || null,
      post,
    });
  } catch (error) {
    console.error("GET EDIT PAGE ERROR:", error);
    res.status(500).send("Failed to load edit page");
  }
};

// Update Post (with optional image replace)
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send("Post not found");
    }

    // Only allow owner to update
    if (!req.user || post.author.toString() !== req.user._id.toString()) {
      return res.status(403).send("You are not authorized to update this post");
    }

    // Update text fields
    post.title = req.body.title ?? post.title;
    post.description = req.body.description ?? post.description;
    post.category = req.body.category ?? post.category;
    post.content = req.body.content ?? post.content;

    // If new image uploaded via multer-storage-cloudinary
    if (req.file) {
      // Remove old image from Cloudinary if it exists
      try {
        if (post.images && post.images.length > 0 && post.images[0].public_id) {
          await cloudinary.uploader.destroy(post.images[0].public_id);
        }
      } catch (delErr) {
        // log but don't abort update — continue to replace image
        console.error("Failed to delete old Cloudinary image:", delErr);
      }

      // Save new image info
      post.images = [
        {
          url: req.file.path,
          public_id: req.file.filename,
        },
      ];
    }

    await post.save();
    res.redirect("/profile");
  } catch (error) {
    console.error("UPDATE POST ERROR:", error);
    res.status(500).send("Failed to update post");
  }
};

// Delete Post (and remove Cloudinary image)
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send("Post not found");
    }

    // Only allow owner to delete
    if (!req.user || post.author.toString() !== req.user._id.toString()) {
      return res.status(403).send("You are not authorized to delete this post");
    }

    // Delete cloudinary image if present
    try {
      if (post.images && post.images.length > 0 && post.images[0].public_id) {
        await cloudinary.uploader.destroy(post.images[0].public_id);
      }
    } catch (delErr) {
      console.error("Failed to delete Cloudinary image:", delErr);
      // proceed with deletion of post even if image deletion failed
    }

    await post.deleteOne();
    res.redirect("/profile");
  } catch (error) {
    console.error("DELETE POST ERROR:", error);
    res.status(500).send("Failed to delete post");
  }
};
