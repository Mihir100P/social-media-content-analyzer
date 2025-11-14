const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const analyzeRoutes = require("./routes/analyze");


dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use("/api/analyze", analyzeRoutes);

const PORT = process.env.PORT ;

app.listen(PORT, () => console.log("Server running on port 5000"));
