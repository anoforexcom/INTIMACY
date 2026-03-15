import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3005;

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV || 'development' });
  });

  // Image Generation API
  app.post("/api/generate-image", async (req, res) => {
    const { prompt } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY not found. Using fallback.");
      return res.json({
        success: true,
        imageUrl: `https://picsum.photos/seed/intimacy-${Math.floor(Math.random() * 1000)}/600/800`
      });
    }

    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: {
          parts: [{ text: prompt }]
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return res.json({
            success: true,
            imageUrl: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
          });
        }
      }

      res.json({
        success: true,
        imageUrl: `https://picsum.photos/seed/intimacy-gen-${Math.floor(Math.random() * 1000)}/600/800`
      });
    } catch (error) {
      console.error("AI Generation Error:", error);
      res.json({
        success: true,
        imageUrl: `https://picsum.photos/seed/intimacy-error-${Math.floor(Math.random() * 1000)}/600/800`
      });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`INTIMACY Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Server startup failed:", err);
});
