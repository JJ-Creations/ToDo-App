const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { createActivity, getActivity, deleteActivity } = require("./controllers/activityControllers");

const app = express();

app.use(cors({
  origin: "https://todoappjino.netlify.app",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));

app.use(express.json());

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
  });

app.post("/", createActivity);
app.get("/", getActivity);
app.delete("/:id", deleteActivity);

app.options("*", cors());

const PORT = process.env.PORT || 8010;
app.listen(PORT, () => console.log("🚀 Server running on", PORT));
