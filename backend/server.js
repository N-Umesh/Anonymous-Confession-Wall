const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the .env file");
}

app.use(cors());
app.use(express.json());

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const ConfessionSchema = new mongoose.Schema({
  message: String
});

const Confession = mongoose.model("Confession", ConfessionSchema);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/confessions", async (req, res) => {
  const newConfession = new Confession({
    message: req.body.message
  });

  await newConfession.save();

  res.json({ message: "Confession Added" });
});

app.get("/confessions", async (req, res) => {
  const data = await Confession.find();

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
