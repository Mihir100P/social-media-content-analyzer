const Tesseract = require("tesseract.js");

const extractImageText = async (path) => {
  const result = await Tesseract.recognize(path, "eng");
  return result.data.text;
};

module.exports = extractImageText;