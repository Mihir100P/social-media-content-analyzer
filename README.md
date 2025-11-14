# Document Upload & Text Extraction Application

## Project Overview
This application allows users to upload PDF files and image files (e.g., scanned documents) and extract text from them and give suggestions to the users. It supports both direct PDF parsing and Optical Character Recognition (OCR) for images. The app is built with a focus on usability, clean code, and robust error handling.

---

## Features

### 1. Document Upload
- Supports PDF files and image files (JPG, PNG, etc.).
- Provides a drag-and-drop interface and a file picker for easy uploads.
- Displays file upload progress and loading indicators for better UX.

### 2. Text Extraction
- **PDF Parsing:** Extracts text from PDFs while maintaining formatting.
- **OCR:** Extracts text from scanned images using Tesseract OCR.

---

## Technical Details

- **Frontend:** React.js
- **Backend:** Node.js and Express.js
- **OCR:** Tesseract.js
- **PDF Parsing:** fs, pdf-parse
- **AI(for Suggestions):** GROQ AI
- **Error Handling:** Displays clear error messages for unsupported formats or failed uploads.
- **UX Enhancements:** Loading states while processing files.

---

## Installation & Setup

```bash
git clone https://github.com/Mihir100P/social-media-content-analyzer.git
cd social-media-content-analyzer

# For Node.js/React example
npm install

# Development mode
npm start

# Production build (if applicable)
npm run build


