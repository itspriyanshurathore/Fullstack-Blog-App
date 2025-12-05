import express from "express";
import multer from "multer";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/generate", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const base64Image = req.file.buffer.toString("base64");

    // Correct Vision Model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
      Analyze this image and return ONLY a JSON object in this exact format:

      {
        "title": "",
        "description": "",
        "category": "",
        "content": ""
      }

      Rules:
      - description MUST be max 20 words
      - category MUST be 1 word
      - content MUST be 150-200 words
      - return ONLY JSON, no extra text or markdown
    `;

    const result = await model.generateContent([
      { text: prompt },
      {
        inlineData: {
          data: base64Image,
          mimeType: req.file.mimetype,
        },
      },
    ]);

    let text = result.response.text();
    text = text.replace(/```json|```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      return res.json({ error: "Invalid JSON returned", raw: text });
    }

    res.json(parsed);
  } catch (error) {
    console.error("GEMINI ERROR:", error);
    res.status(500).json({ error: "Gemini generation failed" });
  }
});

export default router;
