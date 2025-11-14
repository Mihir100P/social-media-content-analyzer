const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

const analyzeFile = require("../controllers/analyze.js");

router.post("/", upload.single("file"), analyzeFile);

module.exports = router;
