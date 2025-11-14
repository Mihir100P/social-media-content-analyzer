const extractPDFText = require("../services/pdfParser.js");
const extractImageText = require("../services/ocr.js");
const analyzeWithAI = require("../services/ai.js");

const analyzeFile = async (req, res) => {
  try {
    const file = req.file;
    let text = "";

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    if (file.mimetype === "application/pdf") {
      text = await extractPDFText(file.path);
    } else if (file.mimetype.startsWith("image/")) {
      text = await extractImageText(file.path);
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    const aiSuggestions = await analyzeWithAI(text);

    res.json({
      extractedText: text,
      suggestions: aiSuggestions
    });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to analyze file" });
  }
};

module.exports = analyzeFile;
