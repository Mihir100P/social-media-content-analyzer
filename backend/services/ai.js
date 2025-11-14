const Groq = require("groq-sdk");
const dotenv = require("dotenv");

dotenv.config();

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function analyzeWithAI(text) {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
  {
    role: "system",
    content:
      "You are an expert in social media content optimization. The user will upload content (text extracted from PDF or image). Your job: suggest improvements to make the post more engaging, attractive, and social-media friendly. Focus ONLY on improving the user's content (not coding, not technology). Return ONLY a JSON array of short suggestions. Example: [\"Increase brightness of image\", \"Use relevant hashtags\", \"Shorten caption\", \"Add emojis\"]."
  },
  {
    role: "user",
    content: text
  }
]

    });

    let raw = response.choices[0].message.content.trim();

    raw = raw.replace(/```json/gi, "").replace(/```/g, "").trim();

    const start = raw.indexOf("[");
    const end = raw.lastIndexOf("]");

    if (start !== -1 && end !== -1) {
      raw = raw.slice(start, end + 1);
    }

    try {
      return JSON.parse(raw);
    } catch (e) {
      console.log("⚠ Could not parse AI JSON. Raw:", raw);
      return ["AI could not generate clean suggestions. Try again."];
    }

  } catch (err) {
    console.error(err);
    return ["AI analysis failed. Please try again."];
  }
}

module.exports = analyzeWithAI;
