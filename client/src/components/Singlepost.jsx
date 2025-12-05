import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTag,
  faEdit,
  faTrash,
  faComment,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function SinglePost({ post = {}, user = null }) {
  const [editedContent, setEditedContent] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);

  const comments = post.comments || []; // safety

  const openEditModal = (comment) => {
    setEditCommentId(comment._id);
    setEditedContent(comment.content);
  };

  return (
    <div id="SinglePost" className="bg-light">
      {/* HERO SECTION */}
      <section
        className="post-hero"
        style={{
          height: "50vh",
          background: `
            linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url(${post.images?.[0]?.url || ""})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0 0 20px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          className="text-white fw-bold text-center"
          style={{
            fontSize: "3.2rem",
            textShadow: "0px 4px 12px rgba(0,0,0,0.7)",
          }}
        >
          {post.title || "Untitled Post"}
        </h1>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "900px", margin: "40px auto" }}>
        {/* POST INFO */}
        <div
          className="shadow-sm d-flex justify-content-between align-items-center mb-3"
          style={{
            padding: "20px 30px",
            background: "#fff",
            borderRadius: "15px",
            marginTop: "-25px",
          }}
        >
          <span className="badge bg-primary d-flex align-items-center">
            <FontAwesomeIcon icon={faTag} className="me-2" />
            {post.category || "No Category"}
          </span>

          <p className="text-muted m-0 fw-semibold d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            {post.author?.username || "Unknown"}
          </p>
        </div>

        {/* POST BODY */}
        <div className="post-content shadow-sm">{post.description || ""}</div>

        <div className="post-content shadow-sm">{post.content || ""}</div>

        {/* COMMENTS SECTION */}
        <div className="mt-5">
          <h3 className="fw-bold mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faComment} className="me-2" />
            Comments
          </h3>

          {/* COMMENT FORM */}
          {user ? (
            <form className="card p-4 shadow-sm mb-4">
              <label className="form-label fw-semibold">Write a comment</label>
              <textarea className="form-control" rows="3" required />

              <button className="btn btn-primary px-4 mt-3">
                <FontAwesomeIcon icon={faComment} className="me-2" />
                Post Comment
              </button>
            </form>
          ) : (
            <p className="text-muted">You must login to comment.</p>
          )}

          {/* COMMENT LIST */}
          {comments.length === 0 ? (
            <p className="text-muted">No comments yet.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment._id} className="card p-3 shadow-sm mb-3">
                <div className="d-flex align-items-center">
                  {/* PROFILE CIRCLE */}
                  <div
                    className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px",
                      fontSize: "1.3rem",
                    }}
                  >
                    {comment.author?.username?.charAt(0)?.toUpperCase() || "?"}
                  </div>

                  {/* COMMENT INFO */}
                  <div className="flex-grow-1">
                    <h6 className="m-0 fw-bold">
                      {comment.author?.username || "User"}
                    </h6>
                    <small className="text-muted">
                      {comment.createdAt
                        ? new Date(comment.createdAt).toDateString()
                        : ""}
                    </small>
                  </div>

                  {/* EDIT / DELETE BUTTONS */}
                  {user && user._id === comment.author?._id && (
                    <div>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => openEditModal(comment)}
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                      >
                        <FontAwesomeIcon icon={faEdit} className="me-1" />
                        Edit
                      </button>

                      <button className="btn btn-sm btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash} className="me-1" />
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <p className="mt-3">{comment.content}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Comment</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <textarea
                className="form-control"
                rows="3"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>

      {/* BACK BUTTON */}
      <a
        href="/"
        className="btn btn-secondary d-block mx-auto mt-4 mb-5"
        style={{
          width: "fit-content",
          padding: "10px 25px",
          borderRadius: "50px",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Back to Home
      </a>
    </div>
  );
}
