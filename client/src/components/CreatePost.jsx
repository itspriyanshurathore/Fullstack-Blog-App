import { useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./createpost.css";

export default function CreatePost() {
  const [preview, setPreview] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    content: "",
  });

  const [previewVisible, setPreviewVisible] = useState(false);
  const imageRef = useRef(null);
  const [aiLoading, setAiLoading] = useState(false);

  /* FONT AWESOME CATEGORY ICONS */
  const categoryIcons = {
    travel: "fa-solid fa-plane",
    tech: "fa-solid fa-laptop",
    technology: "fa-solid fa-microchip",
    ai: "fa-solid fa-robot",
    coding: "fa-solid fa-code",
    programming: "fa-solid fa-terminal",
    food: "fa-solid fa-utensils",
    business: "fa-solid fa-briefcase",
    finance: "fa-solid fa-coins",
    education: "fa-solid fa-book",
    nature: "fa-solid fa-tree",
    sports: "fa-solid fa-trophy",
    gaming: "fa-solid fa-gamepad",
    music: "fa-solid fa-music",
    movies: "fa-solid fa-film",
    general: "fa-solid fa-tag",
  };

  /* CATEGORY COLORS */
  const categoryColors = {
    travel: "tag-blue",
    technology: "tag-green",
    tech: "tag-green",
    ai: "tag-dark",
    coding: "tag-gray",
    food: "tag-yellow",
    business: "tag-dark",
    finance: "tag-yellow",
    education: "tag-gray",
    nature: "tag-green",
    sports: "tag-red",
    gaming: "tag-dark",
    music: "tag-dark",
    movies: "tag-blue",
    general: "tag-gray",
  };

  /* IMAGE UPLOAD */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview({ ...preview, image: URL.createObjectURL(file) });
      setPreviewVisible(true);
    }
  };

  /* DRAG + DROP */
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview({ ...preview, image: URL.createObjectURL(file) });
      setPreviewVisible(true);
    }
  };

  /* TEXT INPUT */
  const onChange = (e) => {
    setPreview({ ...preview, [e.target.name]: e.target.value });
    setPreviewVisible(true);
  };

  /* AI GENERATE */
  const handleAIGenerate = async () => {
    if (!preview.image) return alert("Upload an image!");

    setAiLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", imageRef.current.files[0]);

      const res = await fetch("/ai/generate", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setPreview({
        ...preview,
        title: data.title,
        description: data.description,
        category: data.category,
        content: data.content,
      });

      setPreviewVisible(true);
    } catch (err) {
      alert("AI generation failed");
    }

    setAiLoading(false);
  };

  return (
    <div className="create-container">
      <h2 className="title">
        <i className="fa-solid fa-pen-nib"></i> Create New Blog Post
      </h2>

      <div className="create-grid">
        {/* LEFT FORM */}
        <div className="glass-card form-section">
          {/* DRAG AND DROP */}
          <div
            className="dropzone"
            onClick={() => imageRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <i className="fa-solid fa-cloud-arrow-up drop-icon"></i>
            <p className="dz-heading">Drag & Drop your image</p>
            <span className="dz-sub">or click to browse</span>
            <input
              type="file"
              hidden
              ref={imageRef}
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          {/* AI BUTTON */}
          <button type="button" className="ai-btn" onClick={handleAIGenerate}>
            {aiLoading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i> Generating...
              </>
            ) : (
              <>
                <i className="fa-solid fa-wand-magic-sparkles"></i> Generate
                with AI
              </>
            )}
          </button>

          {/* TITLE */}
          <label>Blog Title</label>
          <input
            type="text"
            name="title"
            className="input"
            value={preview.title}
            onChange={onChange}
          />

          {/* DESCRIPTION */}
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="input"
            value={preview.description}
            onChange={onChange}
          />

          {/* CATEGORY */}
          <label>Category</label>
          <input
            type="text"
            name="category"
            className="input"
            value={preview.category}
            onChange={onChange}
          />

          {/* CONTENT */}
          <label>Full Content</label>
          <textarea
            name="content"
            rows="5"
            className="input textarea"
            value={preview.content}
            onChange={onChange}
          ></textarea>

          <button className="submit-btn">
            <i className="fa-solid fa-upload"></i> Publish Post
          </button>
        </div>

        {/* PREVIEW */}
        <div className="glass-card preview-section">
          {previewVisible && (
            <>
              {preview.image && (
                <img src={preview.image} className="preview-image" />
              )}

              <h3 className="preview-title">{preview.title}</h3>

              {preview.category && (
                <span
                  className={`tag ${
                    categoryColors[preview.category.toLowerCase()] || "tag-gray"
                  }`}
                >
                  <i
                    className={
                      categoryIcons[preview.category.toLowerCase()] ||
                      "fa-solid fa-tag"
                    }
                  ></i>{" "}
                  {preview.category}
                </span>
              )}

              <p className="preview-desc">{preview.description}</p>
              <p className="preview-content">{preview.content}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
