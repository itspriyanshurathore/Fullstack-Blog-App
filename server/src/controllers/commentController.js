import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

// Add a new Comment
export const addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const postId = req.params.id;

    if (!content || content.trim().length === 0) {
      return res.status(400).send("Comment cannot be empty");
    }

    const newComment = await Comment.create({
      content,
      post: postId,
      author: req.user._id,
    });

    await Post.findByIdAndUpdate(postId, {
      $push: { comments: newComment._id },
    });

    res.redirect(`/post/${postId}`);
  } catch (error) {
    console.log("ADD COMMENT ERROR:", error);
    res.status(500).send("Failed to add comment");
  }
};
