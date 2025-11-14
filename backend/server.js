const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const analyzeRoutes = require("./routes/analyze");


dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:5173", credentials: true }));
}

app.use(express.json());
app.use("/api/analyze", analyzeRoutes);

const PORT = process.env.PORT ;

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => console.log("Server running on port 5000"));
