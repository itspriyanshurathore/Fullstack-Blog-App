import express from "express";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

const router = express.Router();

// Middleware
function isLoggedIn(req, res, next) {
  if (req.user) return next();
  return res.redirect("/login");
}

/* -------------------------------------------
   ADD COMMENT
--------------------------------------------*/
router.post("/post/:id/comment", isLoggedIn, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).send("Post not found");

    const comment = await Comment.create({
      content: req.body.content,
      author: req.user._id,
      post: post._id,
    });

    post.comments.push(comment._id);
    await post.save();

    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

/* -------------------------------------------
   EDIT COMMENT
--------------------------------------------*/
router.post("/comment/:id/edit", isLoggedIn, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    comment.content = req.body.content;
    await comment.save();

    res.redirect(`/post/${comment.post}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/post/${comment.post}`);
  }
});

/* -------------------------------------------
   DELETE COMMENT
--------------------------------------------*/
router.post("/comment/:id/delete", isLoggedIn, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    await Comment.findByIdAndDelete(comment._id);

    await Post.updateOne(
      { _id: comment.post },
      { $pull: { comments: comment._id } }
    );

    res.redirect(`/post/${comment.post}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/post/${comment.post}`);
  }
});

export default router;
